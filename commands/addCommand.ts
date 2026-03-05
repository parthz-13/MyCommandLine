import type { Command } from "commander";
import { BaseCommand } from "./BaseCommand";

export class AddCommand extends BaseCommand {
  name = "add <a> <b>";
  description = "Add two numbers";

  protected configure(command: Command): void {
    command.action((a: string, b: string) => {
      const aNum = Number(a);
      const bNum = Number(b);

      if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
        console.error("Both <a> and <b> must be valid numbers.");
        process.exitCode = 1;
        return;
      }

      const result = aNum + bNum;
      console.log(`${aNum} + ${bNum} = ${result}`);
    });
  }
}
