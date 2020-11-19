
module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("Er is geen muziek aan het spelen op dit moment.");

    if (message.member.voice.channel != message.guild.me.voice.channel) return message.channel.send("Sorry je zit niet in het zelfde kanaal");

    if (!guildIDData.dispatcher.paused) return message.channel.send("De muziek is niet gepauzeerd.");

    guildIDData.dispatcher.resume();

    return message.channel.send("Succesvol herstart.");

}

module.exports.help = {
    name: "resume",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}