const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(kickUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** Gekickt:** )
            **Gekickt door:** ${message.author}
            **Redenen: ** ${reason}`);


}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}