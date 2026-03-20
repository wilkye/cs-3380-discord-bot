# CS 3380 Discord Bot

A Discord bot built with JavaScript to explore discord.js and practice
creating a command-based "shell."

## Requirements

- Node.js v18+
- A Discord bot application (see Setup)

## Setup

1. **Clone the repo** and install dependencies:
   ```
   npm install
   ```

2. **Create a Discord bot application:**
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   - Click "New Application" and give it a name
   - Go to the **Bot** tab and click "Reset Token" to get your `API_TOKEN`
   - Go to the **OAuth2** tab to find your `CLIENT_ID`
   - To get your `GUILD_ID`, enable Developer Mode in Discord
     (Settings > Advanced > Developer Mode), then right-click your
     server and click "Copy Server ID"

3. **Create a `.env` file** in the project root:
   ```
   API_TOKEN=your_bot_token_here
   CLIENT_ID=your_client_id_here
   GUILD_ID=your_guild_id_here
   ```

4. **Invite the bot** to your server:
   - In the Developer Portal, go to **OAuth2 > URL Generator**
   - Select scopes: `bot`, `applications.commands`
   - No additional permissions are needed
   - Copy the generated URL and open it in your browser to invite the bot

5. **Deploy the slash commands:**
   ```
   node deploy-commands.js
   ```

6. **Start the bot:**
   ```
   node index.js
   ```

## Commands

| Command | Description |
|---------|-------------|
| `/help` | Displays all available commands (only visible to you) |
| `/lorem` | Displays the first 100 words of Lorem Ipsum |
| `/die`  | Kills the bot |
| `/roll` | Roll a die — choose from d4, d6, d10, or d20 |
| `/tictac` | Play a game of tic-tac-toe against the bot |
