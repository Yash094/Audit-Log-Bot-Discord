const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sourcecode",
  run: async (client, message, args) => {
    message.channel.send(
      new MessageEmbed()
        .setTitle(`CLICK HERE TO GET THE SOURCE`)
        .setURL("https://github.com/shinchanOP/discord-audit-log-webhook")
        .addField("Discord.js: ", "[`v12.5.1`](https://discord.js.org)", true)
      .setColor("green")
        .addField(
          "NOTE. ",
          "Please Add My Bots To Your Server\n[AZTEX MULTIPURPOSE BOT](https://discord.com/oauth2/authorize?client_id=687257316151656485&permissions=8&scope=bot)\n[OFFICIAL LOGGER BOT](https://discord.com/api/oauth2/authorize?client_id=813806729639886879&permissions=8&scope=bot)"
        )
    );
  }
};
