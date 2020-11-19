const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("Er is geen muziek aan het spelen op dit moment.");

    if (message.member.voice.channel != message.guild.me.voice.channel) return message.channel.send("Sorry je zit niet in het zelfde kanaal");

    if (message.member.hasPermission("KICK_MEMBERS")) {

        message.channel.send("Opweg naar het volgend liedje");

        return guildIDData.dispatcher.emit("finish");

    }

    var amountUsers = message.member.voice.channel.members.size;

    var amountSkip = Math.ceil(amountUsers / 2);

    if (!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = [];

    if (guildIDData.queue[0].voteSkips.includes(message.member.id)) return message.channel.send("Sorry je hebt als een geskipt");

    guildIDData.queue[0].voteSkips.push(message.member.id);
    options.active.set(message.guild.id, guildIDData);

    if (guildIDData.queue[0].voteSkips.length >= amountSkip) {

        message.channel.send("Opweg naar het volgend liedje");

        return guildIDData.dispatcher.emit("finish");

    }

    message.channel.send(`Toegevoegd van skip aanvraag. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);

}

module.exports.help = {
    name: "skip",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}