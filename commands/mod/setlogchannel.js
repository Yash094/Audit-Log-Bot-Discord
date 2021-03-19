const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "setlogchannel",
  run: async (client, message, args) => {
    message.delete();

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel
        .send("You do not have permission to use this command.")
        .then(m => m.delete({ timeout: 5000 })); // if the user does not have perms

    const channel = await message.mentions.channels.first();
    const guild1 = message.guild;
    let webhookid;
    let webhooktoken;
    await channel
      .createWebhook(guild1.name, {
        avatar: guild1.iconURL({ format: "png" })
      })
      .then(webhook => {
        webhookid = webhook.id;
        webhooktoken = webhook.token;
      });

    if (!channel)
      return message.channel
        .send(
          "I cannot find that channel. Please mention a channel within this server."
        ) // if the user do not mention a channel
        .then(m => m.delete({ timeout: 5000 }));
    const data = {
      logchn: channel.id,
      webhooktoken: webhooktoken,
      webhookid: webhookid
    };
    db.set(`chn1_${message.guild.id}`, data);
    return message.channel.send(`The log channel has been set to ${channel}`);
    let check = await db.get(`chn1_${message.guild.id}`)
    console.log(check)
  }
};
