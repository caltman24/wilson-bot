"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
const useGetCommands_1 = __importDefault(require("./hooks/useGetCommands"));
const useHandleCommand_1 = __importDefault(require("./hooks/useHandleCommand"));
dotenv_1.default.config();
const { TOKEN } = process.env;
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
});
const commands = (0, useGetCommands_1.default)();
client.on("interactionCreate", async (interaction) => {
    (0, useHandleCommand_1.default)(interaction, commands);
});
client.login(TOKEN);
