"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherCommand = void 0;
const axios_1 = __importDefault(require("axios"));
const BaseCommand_1 = require("./BaseCommand");
class WeatherCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "weather <city>";
        this.description = "Show simple current weather information for a city";
    }
    configure(command) {
        command.action(async (city) => {
            if (!city.trim()) {
                console.error("City name is required.");
                process.exitCode = 1;
                return;
            }
            try {
                // Using wttr.in which provides a simple text-based weather summary
                const res = await axios_1.default.get(`https://wttr.in/${encodeURIComponent(city)}`, {
                    params: {
                        format: 3,
                    },
                });
                console.log(`Weather for ${city}:`);
                console.log(res.data);
            }
            catch (e) {
                console.error("Failed to fetch weather information.");
                process.exitCode = 1;
            }
        });
    }
}
exports.WeatherCommand = WeatherCommand;
