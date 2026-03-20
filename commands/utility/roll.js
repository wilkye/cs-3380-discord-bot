import { SlashCommandBuilder } from "discord.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Rolls a dice of your choice.")
        .addStringOption(option =>
            option.setName("choice")
                .setDescription("Choose a Dice")
                .setRequired(true)
                .setChoices(
                    { name: 'd4', value: '4' },
                    { name: 'd6', value: '6' },
                    { name: 'd10', value: '10' },
                    { name: 'd20', value: '20' }
                )
        ),
    async execute(interaction) {
        const userChoice = interaction.options.getString("choice");

        const randomNum = Math.floor(Math.random() * parseInt(userChoice)) + 1
        await interaction.reply(`You rolled a ${randomNum}`);
    }
}

export default cmd;