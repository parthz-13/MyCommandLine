#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = require("./cli_engine/cli_engine");
const greetCommand_1 = require("./commands/greetCommand");
const addCommand_1 = require("./commands/addCommand");
const subCommand_1 = require("./commands/subCommand");
const mulCommand_1 = require("./commands/mulCommand");
const divCommand_1 = require("./commands/divCommand");
const fileInfoCommand_1 = require("./commands/fileInfoCommand");
const timeCommand_1 = require("./commands/timeCommand");
const jokeCommand_1 = require("./commands/jokeCommand");
const quoteCommand_1 = require("./commands/quoteCommand");
const githubUserCommand_1 = require("./commands/githubUserCommand");
const weatherCommand_1 = require("./commands/weatherCommand");
const versionCommand_1 = require("./commands/versionCommand");
const engine = new cli_engine_1.CLIEngine();
engine.registerCommands([
    new greetCommand_1.GreetCommand(),
    new addCommand_1.AddCommand(),
    new subCommand_1.SubCommand(),
    new mulCommand_1.MulCommand(),
    new divCommand_1.DivCommand(),
    new fileInfoCommand_1.FileInfoCommand(),
    new timeCommand_1.TimeCommand(),
    new jokeCommand_1.JokeCommand(),
    new quoteCommand_1.QuoteCommand(),
    new githubUserCommand_1.GithubUserCommand(),
    new weatherCommand_1.WeatherCommand(),
    new versionCommand_1.VersionCommand(),
]);
engine.run();
