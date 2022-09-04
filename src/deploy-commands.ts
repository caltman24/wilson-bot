import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
dotenv.config();
const { CLIENT_ID, TOKEN } = process.env;

const commands = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(TOKEN as string);

// rest
//   .put(
//     Routes.applicationGuildCommands(CLIENT_ID as string, GUILD_ID as string),
//     { body: commands }
//   )
//   .then((data: any) =>
//     console.log(`Successfully registered ${data.length} application commands `)
//   )
//   .catch(console.error);

rest
  .put(Routes.applicationCommands(CLIENT_ID as string), { body: commands })
  .then((data: any) =>
    console.log(`Successfully registered ${data.length} application commands `)
  )
  .catch(console.error);
