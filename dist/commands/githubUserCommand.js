"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubUserCommand = void 0;
const axios_1 = __importDefault(require("axios"));
const BaseCommand_1 = require("./BaseCommand");
class GithubUserCommand extends BaseCommand_1.BaseCommand {
    constructor() {
        super(...arguments);
        this.name = "github-user <username>";
        this.description = "Fetch basic information about a GitHub user";
    }
    configure(command) {
        command.action(async (username) => {
            try {
                const res = await axios_1.default.get(`https://api.github.com/users/${username}`, {
                    headers: {
                        "User-Agent": "mycli",
                    },
                });
                const data = res.data;
                console.log(`GitHub user: ${data.login}`);
                if (data.name)
                    console.log(`Name: ${data.name}`);
                if (data.bio)
                    console.log(`Bio: ${data.bio}`);
                console.log(`Public repos: ${data.public_repos}`);
                console.log(`Followers: ${data.followers}`);
                if (data.html_url)
                    console.log(`Profile: ${data.html_url}`);
            }
            catch (e) {
                console.error("Failed to fetch GitHub user information.");
                process.exitCode = 1;
            }
        });
    }
}
exports.GithubUserCommand = GithubUserCommand;
