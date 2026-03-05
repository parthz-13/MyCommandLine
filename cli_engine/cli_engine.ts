import { Command } from "commander";

export interface CLICommand {
  register(program: Command): void;
}

export class CLIEngine {
  private program: Command;

  constructor() {
    this.program = new Command();

    this.program
      .name("mycli")
      .description("A custom multi-command Node.js + TypeScript CLI tool")
      .version("1.0.0");
  }

  registerCommands(commands: CLICommand[]): void {
    commands.forEach((command) => {
      command.register(this.program);
    });
  }

  run(argv: readonly string[] = process.argv): void {
    this.program.parse(argv);
  }
}
