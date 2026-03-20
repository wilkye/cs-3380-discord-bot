import dotenv from "dotenv";
dotenv.config();

const token = process.env.API_TOKEN;

if (!token) {
    console.error("API_TOKEN is missing in the .env file");
    process.exit(1);
}

import pong from "./commands/utility/pong.js"
import tictac from "./commands/utility/tictac.js"
import help from "./commands/utility/help.js";
import lorem from "./commands/utility/lorem.js";
import die from "./commands/utility/die.js";
import roll from "./commands/utility/roll.js";

import { Client, Events, GatewayIntentBits, Collection, MessageFlags } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.commands.set(pong.data.name, pong);
client.commands.set(tictac.data.name, tictac);
client.commands.set(help.data.name, help);
client.commands.set(lorem.data.name, lorem);
client.commands.set(die.data.name, die);
client.commands.set(roll.data.name, roll);

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isButton() && interaction.customId.startsWith('ttt_')) {
        await tictac.handleButton(interaction);
        return;
    }

    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (err) {
        console.error(err);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: `There was an error while executing this command!`, flags: MessageFlags.Ephemeral
            });
        } else {
            await interaction.reply({
                content: `There was an error while executing this command!`, flags: MessageFlags.Ephemeral
            });
        }
    }
})

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);