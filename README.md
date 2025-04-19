# 🧮 Build Your Own Calculator

This challenge is to build your own calculator. It could be a command-line tool, desktop application, or web-based.

To complete this challenge, you’ll need to parse a mathematical expression and then perform the relevant calculations before returning the answer to the user.

For example:
```
Input: 2 * 3 + 4
Output: 10

Input: 10 / (6 - 1)
Output: 2
```

Completing this challenge will give you the chance to make use of the **stack data structure** in a real-world application.

---

## ✅ Step Zero – Setup

Set up your development environment however you like:

- Choose your platform: CLI / Desktop / Web
- Pick your language: C++, Rust, JavaScript, etc.
- Set up your preferred editor or IDE

---

## 🧪 Step 1 – Simple Expressions

Handle basic arithmetic expressions like:

- `1 + 2`
- `2 - 1`
- `2 * 3`
- `3 / 2`

### Requirements:
- Parse the expression from input
- Handle integer and floating-point operations
- Validate input and handle errors gracefully

**Note:** When testing in a shell, wrap the expression in quotes to prevent expansion:
```bash
$ calc '2 * 3'
6
```

---

## 🧠 Step 2 – Operator Precedence & Parentheses

Handle more complex expressions with precedence and parentheses:

- `1 + 1 * 5` → should yield `6`
- `(1 + 1) * 5` → should yield `10`

### Recommended Approach:
Convert infix notation to **postfix (Reverse Polish Notation)** using the **Shunting Yard Algorithm**.

Example:
```
Infix:      (1 * 2) - (3 * 4)
Postfix:    1 2 * 3 4 * -
```

### Evaluation via Stack:
1. Push numbers to the stack.
2. When an operator is found, pop operands, apply operation, push result back.

---

## ⚙️ Step 3 – Advanced Operations

Expand your calculator with more features:

- Handle nested brackets
- Add advanced functions: `sin`, `cos`, `tan`, etc.
- Devise your own test cases and implement automated tests

---

## 📘 Reference

- [Wikipedia: Shunting Yard Algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)
- [Reverse Polish Notation (RPN)](https://en.wikipedia.org/wiki/Reverse_Polish_notation)
