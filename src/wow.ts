import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import fetchRandomQuote from "./api/fetchQuote";
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

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "wow") {
    const quote = await fetchRandomQuote();
    interaction.reply(quote.full_line);
  }
});

client.login(TOKEN as string);
