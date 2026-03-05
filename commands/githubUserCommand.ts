import type { Command } from "commander";
import axios from "axios";
import { BaseCommand } from "./BaseCommand";

export class GithubUserCommand extends BaseCommand {
  name = "github-user <username>";
  description = "Fetch basic information about a GitHub user";

  protected configure(command: Command): void {
    command.action(async (username: string) => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}`, {
          headers: {
            "User-Agent": "mycli",
          },
        });

        const data = res.data;
        console.log(`GitHub user: ${data.login}`);
        if (data.name) console.log(`Name: ${data.name}`);
        if (data.bio) console.log(`Bio: ${data.bio}`);
        console.log(`Public repos: ${data.public_repos}`);
        console.log(`Followers: ${data.followers}`);
        if (data.html_url) console.log(`Profile: ${data.html_url}`);
      } catch (e) {
        console.error("Failed to fetch GitHub user information.");
        process.exitCode = 1;
      }
    });
  }
}

