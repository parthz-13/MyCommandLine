import type { Command } from "commander";
import { BaseCommand } from "./BaseCommand";

// Simple version command in addition to the built-in --version flag
export class VersionCommand extends BaseCommand {
  name = "version";
  description = "Show the CLI version";

  protected configure(command: Command): void {
    const version = "1.0.0";

    command.action(() => {
      console.log(`mycli version ${version}`);
    });
  }
}

