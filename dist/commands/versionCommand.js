"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
// Simple version command in addition to the built-in --version flag
class VersionCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "version";
        this.description = "Show the CLI version";
    }
    configure(command) {
        const version = "1.0.0";
        command.action(() => {
            console.log(`mycli version ${version}`);
        });
    }
}
exports.VersionCommand = VersionCommand;
