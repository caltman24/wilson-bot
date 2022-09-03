import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import useGetCommands from "./hooks/useGetCommands";
import useHandleCommand from "./hooks/useHandleCommand";
dotenv.config();
const { TOKEN } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Ready! Logged in as ${client.user?.tag}`);
});

const commands = useGetCommands();

client.on("interactionCreate", async (interaction) => {
  useHandleCommand(interaction, commands);
});

client.login(TOKEN as string);
