const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setFooter(message.member.displayName, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
    **Warning door:** ${message.author}
    **Redenen: ** ${reason}`)
    .addField("Aantal warns", warns[warnUser.id].warns);
}

module.exports.help = {
    name: "test",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}