# JavaScript Keywords

## Definition

**Keywords** are reserved words in JavaScript that have a predefined meaning and purpose in the language syntax. They cannot be used as identifiers (variable names, function names, or labels) because the language engine interprets them as part of its grammar.

---

## Code Example

```js
// ✅ Valid identifiers (not keywords)
let name = 'Alice';
const age = 30;
var city = 'Hyderabad';

// ❌ Invalid — using keywords as identifiers
// let let = 5;         // SyntaxError — 'let' is a keyword
// const return = 10;   // SyntaxError — 'return' is a keyword
// var if = true;       // SyntaxError — 'if' is a keyword

// ✅ Keywords used correctly — for their intended purpose
if (age > 18) {
  console.log('Adult');
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

function greet() {
  return 'Hello';
}

class Person {
  constructor(name) {
    this.name = name;
  }
}
```

---

## Key Takeaways

| Category | Example Keywords | Purpose |
|---|---|---|
| **Declaration** | `let`, `const`, `var`, `function`, `class` | Define variables, functions, and classes |
| **Control Flow** | `if`, `else`, `switch`, `case`, `for`, `while`, `do`, `break`, `continue` | Control execution flow |
| **Error Handling** | `try`, `catch`, `finally`, `throw` | Handle runtime errors |
| **Value Keywords** | `true`, `false`, `null`, `undefined`, `NaN`, `Infinity` | Represent literal values |
| **Module System** | `import`, `export`, `from`, `default`, `as` | Organize code across files |
| **Object/Class** | `new`, `this`, `super`, `extends`, `instanceof`, `typeof`, `delete` | Object creation, inheritance, and type checking |
| **Async** | `async`, `await`, `yield` | Handle asynchronous operations |
| **Other** | `return`, `void`, `debugger`, `in`, `of` | Miscellaneous language features |

> **Key takeaway:** Keywords are the grammar of JavaScript — you cannot repurpose them as names. Attempting to use a keyword as a variable or function name throws a `SyntaxError`.

---

## Complete List of JavaScript Reserved Keywords

### Currently Reserved (cannot use as identifiers)

```
async      await      break      case       catch      class
const      continue   debugger   default    delete     do
else       export     extends    finally    for        function
if         import     in         instanceof let        new
of         return     super      switch     this       throw
try        typeof     var        void       while      with
yield
```

### Reserved for future use (strict mode only)

```
implements  interface   let      package    private
protected   public      static   yield
```

### Reserved for future use (always)

```
enum
```

### Literals that are reserved words

```
true     false    null     undefined
```

### Built-in objects / globals (technically not keywords, but should not be used as identifiers)

```
Array     BigInt    Boolean   Date      Error     Function
Infinity  JSON      Map       Math      NaN       Number
Object    Promise   Proxy     RegExp    Set       String
Symbol    WeakMap   WeakSet   globalThis
```

### Strict mode future-reserved words (older spec)

The following were reserved in ES3 and are still reserved in strict mode for backward compatibility:

```
abstract  boolean   byte      char      double    final
float     goto      int       long      native    short
synchronized  throws  transient  volatile
```
