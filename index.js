const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '51.79.230.80',        // Your server IP
  port: 11009,                 // Your server port
  username: 'BotOnline',       // The name you want to see in the Tablist
  version: '1.21.1'            // Core Minecraft protocol version
});

const botPassword = "BotPassword123"; // Custom password for your login security plugin

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
