import { SlashCommandBuilder } from "discord.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Rolls a dice of your choice."),
    async execute(interaction) {
        await interaction.reply("Ping!");
    }
}

export default cmd;