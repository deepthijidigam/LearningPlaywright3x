# Windows Commands in JavaScript (Node.js)

## Definition

**Windows commands in JS** refers to executing Windows Command Prompt (`cmd.exe`) or PowerShell commands from within a Node.js script using the built-in `child_process` module. This lets JavaScript interact with the OS — run system commands, automate file operations, launch programs, and more.

---

## Key Methods in `child_process`

| Method | How it Runs | Best For |
|---|---|---|
| `exec()` | Spawns a shell, buffers output | Simple commands, short output |
| `execSync()` | Synchronous version of `exec` | Scripts that need step-by-step execution |
| `spawn()` | Streams output in real-time | Long-running processes, large output |
| `execFile()` | Runs an executable directly (no shell) | Performance, security |

---

## Code Example

```js
const { exec, execSync, spawn } = require('child_process');

// ───────────────────────────────
// 1. exec() — run a command, get output as a string
// ───────────────────────────────
exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log('Directory listing:\n', stdout);
});

// ───────────────────────────────
// 2. execSync() — synchronous (blocks until done)
// ───────────────────────────────
const files = execSync('dir /b').toString();
console.log('Files in current folder:\n', files);

// ───────────────────────────────
// 3. spawn() — streams output (good for large data)
// ───────────────────────────────
const dirProcess = spawn('cmd', ['/c', 'dir', '/s']);

dirProcess.stdout.on('data', (data) => {
  console.log(`Output chunk: ${data}`);
});

dirProcess.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

dirProcess.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});

// ───────────────────────────────
// 4. Run PowerShell commands
// ───────────────────────────────
exec('powershell -Command "Get-Process | Select-Object -First 5"', (err, stdout) => {
  console.log('Top 5 processes:\n', stdout);
});

// ───────────────────────────────
// 5. Useful Windows commands from JS
// ───────────────────────────────

// Check current directory
console.log(execSync('cd').toString());

// List environment variables
console.log(execSync('set').toString().split('\n').slice(0, 5)); // first 5

// Create a folder
execSync('mkdir test_folder');

// Check if a file exists
try {
  execSync('if exist package.json echo EXISTS');
  console.log('package.json found');
} catch {
  console.log('package.json not found');
}

// Get system info
console.log(execSync('systeminfo | findstr /B /C:"OS Name"').toString());
```

---

## Common Windows Commands for Automation

| Command | Description | JS Equivalent |
|---|---|---|
| `dir` | List files in directory | `fs.readdirSync()` |
| `cd` | Print current directory | `process.cwd()` |
| `mkdir` | Create directory | `fs.mkdirSync()` |
| `copy` | Copy file | `fs.copyFileSync()` |
| `del` | Delete file | `fs.unlinkSync()` |
| `type` | Print file contents | `fs.readFileSync()` |
| `set` | Show environment variables | `process.env` |
| `systeminfo` | OS details | `os` module |
| `tasklist` | Running processes | — |
| `ipconfig` | Network configuration | `os.networkInterfaces()` |

> **Key takeaway:** `child_process` is the bridge between Node.js and the Windows shell. Use `exec()` / `execSync()` for simple quick commands, and `spawn()` for streaming large outputs. For pure file operations, prefer the `fs` module over shell commands — it's faster and cross-platform.
