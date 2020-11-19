const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("Er is geen muziek aan het spelen op dit moment.");

    if (message.member.voice.channel != message.guild.me.voice.channel) return message.channel.send("Sorry je zit niet in het zelfde kanaal");

    if (guildIDData.dispatcher.paused) return message.channel.send("De muziek is al gepauzeerd.");

    guildIDData.dispatcher.pause();

    return message.channel.send("Succesvol gepauzeerd");

}

module.exports.help = {
    name: "pauze",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}