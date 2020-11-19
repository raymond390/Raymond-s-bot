const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    const categoryID = "767843900823175168";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Claim')
    .setDescription("Je hebt deze ticket geclaimt")

    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
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