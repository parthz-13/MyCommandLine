"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class MulCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "mul <a> <b>";
        this.description = "Multiply two numbers";
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
            const result = aNum * bNum;
            console.log(`${aNum} * ${bNum} = ${result}`);
        });
    }
}
exports.MulCommand = MulCommand;
