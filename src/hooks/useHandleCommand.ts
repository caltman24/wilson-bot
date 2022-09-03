import type { Interaction, Collection } from "discord.js";

const useHandleCommand = async (
  interaction: Interaction,
  commands: Collection<any, any>
) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
};

export default useHandleCommand;
