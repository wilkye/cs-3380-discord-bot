import { SlashCommandBuilder } from "discord.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("lorem")
        .setDescription("Relies with the first 100 words of lorem."),
    async execute(interaction) {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        const fileContent = fs.readFileSync(path.join(__dirname, "../../data/lorem.txt"), "utf-8");
        await interaction.reply(fileContent);
    }
}

export default cmd;