"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@discordjs/rest");
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
dotenv_1.default.config();
const { CLIENT_ID, TOKEN } = process.env;
const commands = [];
const commandsPath = node_path_1.default.join(__dirname, "commands");
const commandFiles = node_fs_1.default
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));
for (const file of commandFiles) {
    const filePath = node_path_1.default.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}
const rest = new rest_1.REST({ version: "10" }).setToken(TOKEN);
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
    .put(discord_js_1.Routes.applicationCommands(CLIENT_ID), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application commands `))
    .catch(console.error);
