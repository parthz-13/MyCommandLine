"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const axios_1 = __importDefault(require("axios"));
const BaseCommand_1 = require("./BaseCommand");
class QuoteCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "quote";
        this.description = "Show a random quote from an API";
    }
    configure(command) {
        command.action(async () => {
            try {
                const res = await axios_1.default.get("https://api.quotable.io/random");
                const { content, author } = res.data;
                console.log(`"${content}"`);
                console.log(`- ${author}`);
            }
            catch (e) {
                console.error("Failed to fetch a quote. Please try again later.");
                process.exitCode = 1;
            }
        });
    }
}
exports.QuoteCommand = QuoteCommand;
