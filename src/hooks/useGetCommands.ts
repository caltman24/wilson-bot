import { Collection } from "discord.js";
import fs from "node:fs";
import path from "node:path";

const useGetCommands = () => {
  const commands = new Collection();

  const commandsPath = path.join(__dirname, "../commands");
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    commands.set(command.data.name, command);
  }
  return commands;
};

export default useGetCommands;
