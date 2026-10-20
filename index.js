const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP',     // Change this to your Minecraft server IP
  port: 25565,                // Change this if your server uses a custom port number
  username: 'BotOnline',      // The name you want to see in the Tablist
  version: '1.20.4'           // Your server version (e.g., '1.20.4' or '1.21')
});

const botPassword = "BotPassword123"; // Enter a custom password for your bot

bot.on('spawn', () => {
  console.log(`${bot.username} has spawned in the server!`);

  // Wait 2 seconds, then automatically register and login
  setTimeout(() => {
    bot.chat(`/register ${botPassword} ${botPassword}`);
    bot.chat(`/login ${botPassword}`);
    console.log("Sent security commands successfully.");
  }, 2000);
});

// Automatically reconnect if the bot gets kicked or the server restarts
bot.on('end', () => {
  console.log('Bot disconnected. Reconnecting in 10 seconds...');
  setTimeout(() => {
    process.exit(1); // Tells Render to automatically restart the script
  }, 10000);
});

bot.on('error', (err) => console.log("Error:", err));
