import { SlashCommandBuilder } from "discord.js";

const cmd = {
    data: new SlashCommandBuilder()
        .setName("lorem")
        .setDescription("Relies with the first 100 words of lorem."),
    async execute(interaction) {
        await interaction.reply("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veritatis odio quod hic ratione velit doloremque aspernatur reprehenderit nesciunt nulla repudiandae ut amet molestiae laudantium placeat expedita officia ab deserunt, totam harum beatae enim. Corrupti modi quo, autem fuga beatae nihil aspernatur fugiat neque consequatur alias ab cupiditate perferendis magnam assumenda dolor natus ea deleniti laudantium corporis sit doloribus est maxime. Distinctio eligendi ullam, natus cum quas modi! Cupiditate amet nemo, aperiam repudiandae provident adipisci, et dolorem molestiae similique natus quae nulla? Voluptate minus cum quasi non reprehenderit consectetur nemo, laboriosam doloribus, iusto, magnam nesciunt. Ex enim repudiandae reiciendis in.");
    }
}

export default cmd;