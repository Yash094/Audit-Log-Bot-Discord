const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
  run: async (client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    const embed = new MessageEmbed()
      .setTitle("Uptime")
      .setColor("GREEN")
      .setDescription(
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(message.guild.name, message.guild.iconURL())
      .setAuthor(client.user.username, client.user.displayAvatarURL());
    message.channel.send(embed);
  }
};
