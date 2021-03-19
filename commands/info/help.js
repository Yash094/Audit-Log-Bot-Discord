const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const helpembed = new MessageEmbed()
      .setTitle("HELP COMMANDS")
      .setDescription(
        "**sourcecode**: To Check The Source Code Of Logger Bot \n**setlogchannel**: To set log channel \n```Usage: L!setlogchannel #channel```"
      )
      .setColor("GREEN")
      .addField(
        "Souce Code",
        `https://github.com/shinchanOP/discord-audit-log-webhook`
      );
    message.channel.send(helpembed);
  }
};
