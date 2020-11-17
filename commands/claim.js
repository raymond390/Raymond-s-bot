const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    const categoryID = "761879667124600842";

    if (message.channel.parentID == categoryID) {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Claim')
    .setColor("#0099ff")
    .setDescription("Je hebt deze ticket geclaimt")

    .setThumbnail('')
    .setImage('')
    .setTimestamp()
    .setFooter('Defensie', '');

return message.channel.send(botEmbed);

    } else {

    message.channel.send("Gelieve dit command te doen bij een ticket.");
    }
}

module.exports.help = {
    name: "claim",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}