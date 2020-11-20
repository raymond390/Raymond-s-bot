const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setThumbnail(kickUser.user.displayAvatarURL)
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`** Gekickt:** ${kickUser} (${kickUser.id})
        **Gekickt door:** ${message.author}
        **Redenen: ** ${reason}`);

    var embedPrompt = new discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor("Gelieve te reageren binnen 30 sec.")
    .setDescription(`Wil je ${kickUser} kicken?`);


}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}