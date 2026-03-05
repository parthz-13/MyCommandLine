"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class AddCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "add <a> <b>";
        this.description = "Add two numbers";
    }
    configure(command) {
        command.action((a, b) => {
            const aNum = Number(a);
            const bNum = Number(b);
            if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
                console.error("Both <a> and <b> must be valid numbers.");
                process.exitCode = 1;
                return;
            }
            const result = aNum + bNum;
            console.log(`${aNum} + ${bNum} = ${result}`);
        });
    }
}
exports.AddCommand = AddCommand;
