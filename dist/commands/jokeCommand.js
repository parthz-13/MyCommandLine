"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = void 0;
const axios_1 = __importDefault(require("axios"));
const BaseCommand_1 = require("./BaseCommand");
class JokeCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "joke";
        this.description = "Show a random programming joke from an API";
    }
    configure(command) {
        command.action(async () => {
            try {
                const res = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
                const { setup, punchline } = res.data;
                console.log(`Joke: ${setup}`);
                console.log(`Punchline: ${punchline}`);
            }
            catch (e) {
                console.error("Failed to fetch a joke. Please try again later.");
            }
        });
    }
}
exports.JokeCommand = JokeCommand;
