"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class GreetCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "greet <name>";
        this.description = "Greet a person by name";
    }
    configure(command) {
        command.action((name) => {
            console.log(`Hello ${name}!`);
        });
    }
}
exports.GreetCommand = GreetCommand;
