## MyCommand / `mycli`

This is a Node.js + TypeScript command-line application built around an object-oriented command engine.  
It exposes a single executable, `mycli`, with multiple subcommands.

### Setup

- **Prerequisites**: Node.js (LTS) and npm installed.
- **Install dependencies**:

```bash
npm install
```

- **Build TypeScript**:

```bash
npm run build
```

This compiles TypeScript to JavaScript into the `dist` folder.

### Running the CLI

You can run the CLI directly:

```bash
node dist/cli.js --help
```

Or, after `npm install -g .` from this folder, you can run:

```bash
mycli --help
```

### Available Commands

- **greet**: `mycli greet <name>`  
  Greet a person by name.

- **add**: `mycli add <a> <b>`  
  Add two numbers (validated as numeric).

- **sub**: `mycli sub <a> <b>`  
  Subtract the second number from the first.

- **mul**: `mycli mul <a> <b>`  
  Multiply two numbers.

- **div**: `mycli div <a> <b>`  
  Divide the first number by the second, with validation for division by zero.

- **fileinfo**: `mycli fileinfo <filepath>`  
  Show basic information about a file or directory.

- **time**: `mycli time`  
  Show the current local and UTC time.

- **joke**: `mycli joke`  
  Fetch a random joke from `https://official-joke-api.appspot.com/random_joke`.

- **quote**: `mycli quote`  
  Fetch a random quote from `https://api.quotable.io/random`.

- **github-user**: `mycli github-user <username>`  
  Fetch GitHub user info from the GitHub REST API.

- **weather**: `mycli weather <city>`  
  Fetch simple current weather text from `https://wttr.in/<city>?format=3`.

- **version**: `mycli version`  
  Show the CLI version.

### Notes

- **Object-Oriented design**:  
  - `CLIEngine` (in `cli_engine/cli_engine.ts`) owns the Commander instance and registers command objects.
  - Each command lives in its own class under `commands/` and extends `BaseCommand`.
- **APIs used**:
  - Official Joke API
  - Quotable API
  - GitHub Users API
  - wttr.in (for weather)

