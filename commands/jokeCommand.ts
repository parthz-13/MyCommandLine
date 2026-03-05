import type { Command } from "commander";
import axios from "axios";
import { BaseCommand } from "./BaseCommand";

export class JokeCommand extends BaseCommand {
  name = "joke";
  description = "Show a random programming joke from an API";

  protected configure(command: Command): void {
    command.action(async () => {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        const { setup, punchline } = res.data;

        console.log(`Joke: ${setup}`);
        console.log(`Punchline: ${punchline}`);
      } catch (e) {
        console.error("Failed to fetch a joke. Please try again later.");
      }
    });
  }
}
