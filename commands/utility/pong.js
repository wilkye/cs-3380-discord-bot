import { SlashCommandBuilder } from "discord.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("pong")
        .setDescription("Relies with ping."),
    async execute(interaction) {
        await interaction.reply("Ping!");
    }
}

export default cmd;