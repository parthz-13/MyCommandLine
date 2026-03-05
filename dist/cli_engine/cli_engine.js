"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIEngine = void 0;
const commander_1 = require("commander");
class CLIEngine {
    constructor() {
        this.program = new commander_1.Command();
        this.program
            .name("mycli")
            .description("A custom multi-command Node.js + TypeScript CLI tool")
            .version("1.0.0");
    }
    registerCommands(commands) {
        commands.forEach((command) => {
            command.register(this.program);
        });
    }
    run(argv = process.argv) {
        this.program.parse(argv);
    }
}
exports.CLIEngine = CLIEngine;
