"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class DivCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "div <a> <b>";
        this.description = "Divide the first number by the second";
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
            if (bNum === 0) {
                console.error("Denominator cannot be 0.");
                process.exitCode = 1;
                return;
            }
            const result = aNum / bNum;
            console.log(`${aNum} / ${bNum} = ${result}`);
        });
    }
}
exports.DivCommand = DivCommand;
