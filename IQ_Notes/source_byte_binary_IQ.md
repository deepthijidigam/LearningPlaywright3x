# Source Code vs Byte Code vs Binary Code

## Example: `helloWorld.js`

```js
console.log('Hello World');
```

---

## Comparison Table

| Aspect | Source Code | Byte Code | Binary Code (Machine Code) |
|---|---|---|---|
| **Definition** | Human-readable instructions written in a programming language (JS, Python, Java, etc.) | Intermediate, platform-independent representation of source code, executed by a virtual machine | Raw instructions (0s and 1s) executed directly by the CPU |
| **Our Example** | `console.log('Hello World');` | `0x11 0x01 0x01 0x10 ...` (V8 Ignition bytecode — internal to Node.js) | `1100 0010 1110 1100 ...` (x86_64 machine instructions for the CPU) |
| **Who writes/reads it** | Written by **humans** (developers) | Generated **automatically** by a compiler/interpreter | Generated **automatically** by a compiler or JIT |
| **Readability** | ✅ Highly readable (English-like syntax) | ❌ Hard to read (raw numeric opcodes) | ❌ Almost impossible for humans to read |
| **Platform dependence** | 🌍 **Platform-independent** (write once, run anywhere) | 🔁 **Platform-independent** until JIT compilation | 🔒 **Platform-specific** (x86 vs ARM vs RISC-V) |
| **How it reaches hardware** | It doesn't — it's the starting point | The VM (like V8) interprets or JIT-compiles it | Loaded into memory and directly executed by the CPU |
| **Tool/Engine** | Written in a text editor (VS Code, etc.) | Node.js **V8 engine** generates Ignition bytecode | V8's **TurboFan** / **Sparkplug** compiles hot bytecode into native machine code |
| **Speed** | N/A (not executed directly) | ✅ **Faster** than interpretation from source, slower than native | ⚡ **Fastest** — direct CPU execution |
| **Storage / File** | Stored as `.js` files (source files) | Exists only **in memory** at runtime (can dump via `--print-bytecode`) | Exists in memory at runtime — can be dumped but is architecture-specific |
| **Can you distribute it?** | ✅ Yes — the source code itself is what you ship | ❌ Not typically — lives in the VM at runtime | ❌ Not typically in JS — the JIT generates it on-the-fly |

---

## Visual Pipeline: Source → Byte Code → Binary Code

```
Your .js file                          V8 Engine                              CPU
┌──────────────────────┐     ┌──────────────────────────────────┐     ┌──────────────┐
│ console.log(         │     │  Parser → AST → Ignition         │     │              │
│   'Hello World'      │────►│  (Bytecode Generator)            │────►│  Executes     │
│ )                    │     │         ↓                        │     │  machine code │
│                      │     │  TurboFan / Sparkplug            │     │              │
│  📝 Source Code      │     │  (JIT → Binary / Machine Code)   │     │  ⚡ CPU       │
└──────────────────────┘     └──────────────────────────────────┘     └──────────────┘
```

### Step-by-Step for `console.log('Hello World')`

1. **You write** → `console.log('Hello World');`
2. **Node.js (V8)** parses it into an **Abstract Syntax Tree (AST)**
3. **Ignition** (the interpreter) generates **bytecode** — a compact sequence of instructions like `LdaConstant`, `CallRuntime`, `Return`
4. If the function runs enough times (hot path), **TurboFan** or **Sparkplug** (JIT compilers) translate the bytecode into **binary machine code** for the specific CPU (x86_64, ARM64, etc.)
5. The **CPU** fetches and executes those binary instructions — printing `Hello World` to your terminal

---

## Key Takeaway

> **Source code** is for humans. **Byte code** is a bridge (VM-readable). **Binary code** is for the machine (CPU-executable). In JavaScript, you always ship source code — the JIT compilation happens invisibly at runtime inside the engine.
