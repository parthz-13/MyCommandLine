#!/usr/bin/env node

import { CLIEngine } from "./cli_engine/cli_engine";
import { GreetCommand } from "./commands/greetCommand";
import { AddCommand } from "./commands/addCommand";
import { SubCommand } from "./commands/subCommand";
import { MulCommand } from "./commands/mulCommand";
import { DivCommand } from "./commands/divCommand";
import { FileInfoCommand } from "./commands/fileInfoCommand";
import { TimeCommand } from "./commands/timeCommand";
import { JokeCommand } from "./commands/jokeCommand";
import { QuoteCommand } from "./commands/quoteCommand";
import { GithubUserCommand } from "./commands/githubUserCommand";
import { WeatherCommand } from "./commands/weatherCommand";
import { VersionCommand } from "./commands/versionCommand";

const engine = new CLIEngine();

engine.registerCommands([
  new GreetCommand(),
  new AddCommand(),
  new SubCommand(),
  new MulCommand(),
  new DivCommand(),
  new FileInfoCommand(),
  new TimeCommand(),
  new JokeCommand(),
  new QuoteCommand(),
  new GithubUserCommand(),
  new WeatherCommand(),
  new VersionCommand(),
]);

engine.run();

