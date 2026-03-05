import type { Command } from "commander";
import fs from "fs";
import path from "path";
import { BaseCommand } from "./BaseCommand";

export class FileInfoCommand extends BaseCommand {
  name = "fileinfo <filepath>";
  description = "Show basic information about a file or directory";

  protected configure(command: Command): void {
    command.action(async (filepath: string) => {
      const resolved = path.resolve(process.cwd(), filepath);

      if (!fs.existsSync(resolved)) {
        console.error(`Path not found: ${resolved}`);
        process.exitCode = 1;
        return;
      }

      try {
        const stats = await fs.promises.stat(resolved);
        const type = stats.isDirectory() ? "directory" : "file";

        console.log(`Path: ${resolved}`);
        console.log(`Type: ${type}`);
        console.log(`Size: ${stats.size} bytes`);
      } catch (err) {
        console.error("Failed to read file info.");
        process.exitCode = 1;
      }
    });
  }
}

