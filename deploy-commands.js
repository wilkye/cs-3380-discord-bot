import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.API_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [];

import pong from "./commands/utility/pong.js";
import tictac from "./commands/utility/tictac.js";

commands.push(pong.data.toJSON());
commands.push(tictac.data.toJSON());

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