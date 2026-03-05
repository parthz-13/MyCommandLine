import type { Command } from "commander";
import axios from "axios";
import { BaseCommand } from "./BaseCommand";

export class QuoteCommand extends BaseCommand {
  name = "quote";
  description = "Show a random quote from an API";

  protected configure(command: Command): void {
    command.action(async () => {
      try {
        const res = await axios.get("https://api.quotable.io/random");
        const { content, author } = res.data;

        console.log(`"${content}"`);
        console.log(`- ${author}`);
      } catch (e) {
        console.error("Failed to fetch a quote. Please try again later.");
        process.exitCode = 1;
      }
    });
  }
}

