import { SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import dotenv from "dotenv";
dotenv.config();
const { GUILD_ID, CLIENT_ID, TOKEN } = process.env;

const commands = [
  new SlashCommandBuilder()
    .setName("wow")
    .setDescription("Replies with a random quote from Owen Wilson"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(TOKEN as string);

rest
  .put(
    Routes.applicationGuildCommands(CLIENT_ID as string, GUILD_ID as string),
    { body: commands }
  )
  .then((data: any) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
