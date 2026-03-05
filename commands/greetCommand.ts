import type { Command } from "commander";
import { BaseCommand } from "./BaseCommand";

export class GreetCommand extends BaseCommand {
  name = "greet <name>";
  description = "Greet a person by name";

  protected configure(command: Command): void {
    command.action((name: string) => {
      console.log(`Hello ${name}!`);
    });
  }
}
