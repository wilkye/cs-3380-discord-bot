import { SlashCommandBuilder, MessageFlags } from "discord.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Relies with all possible commands."),
    async execute(interaction) {
        const commands = interaction.client.commands.map(
            cmd => `**/${cmd.data.name}** - ${cmd.data.description}`
        );

        await interaction.reply({
            content: `**Possible commands:**\n${commands.join("\n")}`,
            flags: MessageFlags.Ephemeral,
        });
    }
}

export default cmd;