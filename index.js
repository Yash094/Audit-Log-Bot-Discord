const Discord = require("discord.js");
const colors = require("colors");
const mongoose = require("mongoose");
const client = new Discord.Client({
  presence: {
    status: "dnd",
    activity: {
      name: "Logger Tutorial",
      type: "STREAMING",
      url: "https://twitch.tv/loggerbotbyshinchan"
    }
  }
});
client.config = require("./config.json");

client.login(client.config.token);

client.on("ready", async () => {
  console.log(
    `${client.user.tag} is now Online! Prefix: ${client.config.prefix}`.bgGreen
  );
});

require("./logger")(client);
//const logger = require("./logger");
//logger(client)

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  let prefix = client.config.prefix;
  if (!message.content.startsWith(client.config.prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});
