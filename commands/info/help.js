const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const helpembed = new MessageEmbed()
    .setTitle("HELP COMMANDS")
    .setDescription(" **setlogchannel**: To set log channel \n```Usage: L!setmodchannel #channel```\n**Uptime**: To get bots run time \n```Usage: L!uptime```")
    .setColor("GREEN")
    message.channel.send(helpembed)
    
    
    
    
  }}