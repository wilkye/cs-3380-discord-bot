import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.API_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [];

import pong from "./commands/utility/pong.js";
import game from "./commands/utility/tictac.js";
import help from "./commands/utility/help.js";
import lorem from "./commands/utility/lorem.js";
import die from "./commands/utility/die.js";
import roll from "./commands/utility/roll.js";

commands.push(pong.data.toJSON());
commands.push(game.data.toJSON());
commands.push(help.data.toJSON());
commands.push(lorem.data.toJSON());
commands.push(die.data.toJSON());
commands.push(roll.data.toJSON());

const rest = new REST().setToken(token);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (err) {
        console.error(err);
    }
})();