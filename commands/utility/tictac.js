import { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

const games = new Map();

function buildBoard(board) {
    const rows = [];
    for (let row = 0; row < 3; row++) {
        const actionRow = new ActionRowBuilder();
        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const cell = board[index];

            let style = ButtonStyle.Secondary;
            if (cell === "X") {
                style = ButtonStyle.Success;
            } else if (cell === "O") {
                style = ButtonStyle.Danger;
            }

            let label = "-";
            if (cell !== null) {
                label = cell;
            }

            const button = new ButtonBuilder()
                .setCustomId("ttt_" + index)
                .setLabel(label)
                .setStyle(style)
                .setDisabled(cell !== null);

            actionRow.addComponents(button);
        }

        rows.push(actionRow);
    }

    return rows;
}

function checkWin(board, player) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const line of winConditions) {
        const a = line[0];
        const b = line[1];
        const c = line[2];

        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }

    return false;
}

function isBoardFull(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
            return false;
        }
    }

    return true;
}

function disableLeftovers(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
            board[i] = " ";
        }
    }
}

const cmd = {
    data: new SlashCommandBuilder()
        .setName("tictac")
        .setDescription("Play tictac toe against the smartest ai..."),
    async execute(interaction) {
        const board = Array(9).fill(null);
        games.set(interaction.user.id, board);

        const rows = buildBoard(board);

        await interaction.reply({
            content: 'Tic Tac Time! Your turn! (X):',
            components: rows,
        });
    },

    async handleButton(interaction) {
        const userId = interaction.user.id;
        const board = games.get(userId);

        if (!board) {
            await interaction.reply({
                content: "No active game! Use /tictac to start one.",
                ephemeral: true,
            });
            return;
        }

        const index = parseInt(interaction.customId.split("_")[1]);

        board[index] = "X";

        await interaction.update({
            content: "Your turn (X):",
            components: buildBoard(board),
        });
    },
}

export default cmd;