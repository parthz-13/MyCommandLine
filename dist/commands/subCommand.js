"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class SubCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "sub <a> <b>";
        this.description = "Subtract the second number from the first";
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
            const result = aNum - bNum;
            console.log(`${aNum} - ${bNum} = ${result}`);
        });
    }
}
exports.SubCommand = SubCommand;
