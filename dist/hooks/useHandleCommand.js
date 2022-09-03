"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useHandleCommand = async (interaction, commands) => {
    if (!interaction.isChatInputCommand())
        return;
    const command = commands.get(interaction.commandName);
    if (!command)
        return;
    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
        });
    }
};
exports.default = useHandleCommand;
