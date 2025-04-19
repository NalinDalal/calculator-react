import { useState } from "react";

function evaluate(expr: string): number {
  const ops: string[] = [];
  const vals: number[] = [];
  const tokens = expr.match(/(\d+(\.\d+)?|[+*/()-]|sin|cos|tan)/g);

  const precedence = (op: string) =>
    ({ "+": 1, "-": 1, "*": 2, "/": 2 })[op] ?? 0;

  const apply = () => {
    const b = vals.pop()!;
    const a = vals.pop()!;
    const op = ops.pop()!;
    const res =
      op === "+"
        ? a + b
        : op === "-"
          ? a - b
          : op === "*"
            ? a * b
            : op === "/"
              ? a / b
              : op === "sin"
                ? Math.sin(b)
                : op === "cos"
                  ? Math.cos(b)
                  : Math.tan(b); // Assuming `tan` is the operator
    vals.push(res);
  };

  if (!tokens) throw new Error("Invalid Expression");

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      vals.push(Number(token));
    } else if (token === "(") {
      ops.push(token);
    } else if (token === ")") {
      while (ops.length && ops[ops.length - 1] !== "(") {
        apply();
      }
      ops.pop(); // Pop the '(' from the stack
    } else if (["+", "-", "*", "/", "sin", "cos", "tan"].includes(token)) {
      while (
        ops.length &&
        precedence(ops[ops.length - 1]) >= precedence(token) &&
        ops[ops.length - 1] !== "("
      ) {
        apply();
      }
      ops.push(token);
    }
  }

  while (ops.length) apply();

  return vals[0];
}

export default function Calculator() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState<number | null>(null);

  return (
    <div className="p-6 mx-auto max-w-md bg-white rounded-xl shadow-md">
      <input
        className="p-2 mb-4 w-full border"
        placeholder="Enter expression like 2 + 3 * 4"
        value={expr}
        onChange={(e) => setExpr(e.target.value)}
      />
      <button
        className="py-2 px-4 text-white bg-blue-500 rounded"
        onClick={() => {
          try {
            setResult(evaluate(expr));
          } catch {
            setResult(null);
          }
        }}
      >
        Calculate
      </button>
      {result !== null && <p className="mt-4 text-xl">Result: {result}</p>}
    </div>
  );
}
