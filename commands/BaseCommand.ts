import type { Command } from "commander";

// Base class that all commands extend for consistent OOP structure
export abstract class BaseCommand {
  abstract name: string;
  abstract description: string;

  register(program: Command): void {
    const command = program.command(this.name).description(this.description);
    this.configure(command);
  }

  protected abstract configure(command: Command): void;
}

