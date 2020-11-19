const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.reply("Connecteer met een spraak kanaal");

    if (!message.guild.me.voice.channel) return message.channel.send("Sorry, de bot is niet verbonden.");

    if (message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send("Sorry je bent niet verbonden met het zelfde kanaal.");

    message.guild.me.voice.channel.leave();

}

module.exports.help = {
    name: "leave",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}