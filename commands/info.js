const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setColor("#0099ff")
            .setDescription("Ik ben aan het leren")
            .addFields(
                {name: "1", value:"Niet Schelden"},
                {name: "2", value:"Niet Pesten"},
                {name: "3", value:"Geen informatie lekken"},
                {name: "4", value:"test"},
                {name: "5", value:"test"},
                {name: "6", value:"test"},
                {name: "7", value:"test"},
                {name: "8", value:"test"},
            )
            .setThumbnail('')
            .setImage('')
            .setTimestamp()
            .setFooter('test', '');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}