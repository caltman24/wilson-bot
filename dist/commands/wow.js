"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fetchQuote_1 = __importDefault(require("../api/fetchQuote"));
module.exports = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName("wow")
        .setDescription("Replies with a random quote from Owen Wilson"),
    async execute(interaction) {
        if (!interaction.isChatInputCommand())
            return;
        const quote = await (0, fetchQuote_1.default)();
        const fields = [
            {
                name: "Current wow",
                value: quote.current_wow_in_movie.toString(),
                inline: true,
            },
            {
                name: "Total wows in movie",
                value: quote.total_wows_in_movie.toString(),
                inline: true,
            },
        ];
        const responseEmbed = new discord_js_1.EmbedBuilder()
            .setColor("Orange")
            .setTitle(`${quote.movie} (${quote.year})`)
            .setDescription(quote.full_line)
            .setAuthor({ name: quote.character })
            .setThumbnail(quote.poster)
            .addFields(...fields)
            .setFooter({
            text: quote.timestamp,
        });
        interaction.reply(quote.video["1080p"]);
        interaction.channel?.send({
            embeds: [responseEmbed],
        });
    },
};
