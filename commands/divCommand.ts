import type { Command } from "commander";
import { BaseCommand } from "./BaseCommand";

export class DivCommand extends BaseCommand {
  name = "div <a> <b>";
  description = "Divide the first number by the second";

  protected configure(command: Command): void {
    command.action((a: string, b: string) => {
      const aNum = Number(a);
      const bNum = Number(b);

      if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
        console.error("Both <a> and <b> must be valid numbers.");
        process.exitCode = 1;
        return;
      }

      if (bNum === 0) {
        console.error("Denominator cannot be 0.");
        process.exitCode = 1;
        return;
      }

      const result = aNum / bNum;
      console.log(`${aNum} / ${bNum} = ${result}`);
    });
  }
}

