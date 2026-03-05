"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
// Base class that all commands extend for consistent OOP structure
class BaseCommand {
    register(program) {
        const command = program.command(this.name).description(this.description);
        this.configure(command);
    }
}
exports.BaseCommand = BaseCommand;
