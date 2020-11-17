const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setColor("#0099ff")
            .setDescription("Ik ben aan het leren")

            .setThumbnail('')
            .setImage('')
            .setTimestamp()
            .setFooter('test', '');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}