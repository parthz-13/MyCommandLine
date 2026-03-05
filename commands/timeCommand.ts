import type { Command } from "commander";
import { BaseCommand } from "./BaseCommand";

export class TimeCommand extends BaseCommand {
  name = "time";
  description = "Show the current local and UTC time";

  protected configure(command: Command): void {
    command.action(() => {
      const now = new Date();

      const local = now.toLocaleString();
      const utc = now.toUTCString();

      console.log(`Local time: ${local}`);
      console.log(`UTC time:   ${utc}`);
    });
  }
}

