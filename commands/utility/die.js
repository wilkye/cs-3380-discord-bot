import { SlashCommandBuilder } from "discord.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("die")
        .setDescription("Kills your bot 😢"),
    async execute(interaction) {
        await interaction.reply("**Bot:** I was so young... why me?");
        interaction.client.destroy();
        process.exit();
    }
}

export default cmd;