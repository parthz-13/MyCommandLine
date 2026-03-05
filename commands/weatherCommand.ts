import type { Command } from "commander";
import axios from "axios";
import { BaseCommand } from "./BaseCommand";

export class WeatherCommand extends BaseCommand {
  name = "weather <city>";
  description = "Show simple current weather information for a city";

  protected configure(command: Command): void {
    command.action(async (city: string) => {
      if (!city.trim()) {
        console.error("City name is required.");
        process.exitCode = 1;
        return;
      }

      try {
        // Using wttr.in which provides a simple text-based weather summary
        const res = await axios.get<string>(`https://wttr.in/${encodeURIComponent(city)}`, {
          params: {
            format: 3,
          },
        });

        console.log(`Weather for ${city}:`);
        console.log(res.data);
      } catch (e) {
        console.error("Failed to fetch weather information.");
        process.exitCode = 1;
      }
    });
  }
}

