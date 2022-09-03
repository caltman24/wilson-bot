import {
  Interaction,
  SlashCommandBuilder,
  EmbedBuilder,
  APIEmbedField,
} from "discord.js";
import fetchRandomQuote from "../api/fetchQuote";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wow")
    .setDescription("Replies with a random quote from Owen Wilson"),
  async execute(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;

    const quote = await fetchRandomQuote();

    const fields: APIEmbedField[] = [
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

    const responseEmbed = new EmbedBuilder()
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
