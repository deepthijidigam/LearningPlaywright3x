# JavaScript Identifiers

## Definition

An **identifier** is a name given to a variable, function, class, property, or label in JavaScript. Identifiers are used to uniquely identify and reference these entities in code. Unlike keywords, identifiers are user-defined names.

---

## Rules for Valid Identifiers

| Rule | Valid ✅ | Invalid ❌ |
|---|---|---|
| Must start with a letter, `_`, or `$` | `name`, `_count`, `$value` | `1name` (starts with digit) |
| Can contain letters, digits, `_`, or `$` | `userName`, `data2`, `my_var` | `my-var` (hyphen not allowed) |
| Cannot be a reserved keyword | `myClass`, `myIf` | `class`, `if`, `return` |
| Case-sensitive | `age` and `Age` are different | — |
| Unicode letters allowed | `name`, `привет`, `名前` | — |

---

## Code Example

```js
// ✅ Valid identifiers
let name = 'Alice';
let _privateVar = 42;
let $dollar = 100;
let user1 = 'Bob';
let camelCaseName = 'camelCase';
let PascalCase = 'PascalCase';
let _ = 'underscore';
let userName123 = 'Charlie';

// ✅ Case-sensitive — different identifiers
let age = 25;
let Age = 30;
let AGE = 35;

console.log(age, Age, AGE); // 25 30 35

// ❌ Invalid identifiers — uncomment to see errors
// let 1st = 'first';      // SyntaxError — starts with digit
// let my-var = 'test';    // SyntaxError — hyphen not allowed
// let let = 5;            // SyntaxError — 'let' is a keyword
// let class = 'math';     // SyntaxError — 'class' is a keyword

// ✅ Valid identifiers with special starting characters
let _hidden = 'hidden';
let $price = 99.99;
let _ = 'underscore only';

// ✅ Multi-word identifiers follow naming conventions
let firstName = 'John';                 // camelCase (variables & functions)
let FirstName = 'John';                 // PascalCase (classes & constructors)
let MAX_LIMIT = 100;                    // SCREAMING_SNAKE_CASE (constants)
let server_error_message = 'not found'; // snake_case (less common in JS)
```

---

## Naming Conventions (Best Practices)

| Convention | Example | When to Use |
|---|---|---|
| **camelCase** | `firstName`, `getUserData` | Variables, functions, object properties |
| **PascalCase** | `Person`, `HttpClient` | Classes, constructors, React components |
| **SCREAMING_SNAKE_CASE** | `MAX_SIZE`, `API_KEY` | Constants (values that never change) |
| **`_` prefix** | `_privateVar` | Convention for "private" members (not enforced) |
| **`$` prefix** | `$element`, `$http` | Common in jQuery or Angular code |

> **Key takeaway:** Identifiers are names you **create** (unlike keywords which are built-in). They must follow the rules: start with a letter/`_`/`$`, contain only letters/digits/`_`/`$`, and avoid reserved words. Use consistent naming conventions to keep your code readable.
