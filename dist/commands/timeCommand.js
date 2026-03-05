"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class TimeCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "time";
        this.description = "Show the current local and UTC time";
    }
    configure(command) {
        command.action(() => {
            const now = new Date();
            const local = now.toLocaleString();
            const utc = now.toUTCString();
            console.log(`Local time: ${local}`);
            console.log(`UTC time:   ${utc}`);
        });
    }
}
exports.TimeCommand = TimeCommand;
