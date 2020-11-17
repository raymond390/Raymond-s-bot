const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Defensie')
            .setDescription("Ga werken bij defensie je moet het maar kunnen")
            .setColor("#0099ff")
            .setDescription("Ga werken bij defensie je moet het maar kunnen")

            .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
            .setImage('https://f.jwwb.nl/public/g/w/t/temp-mxahzxdricxvqfpwpnhx/lm5nsv/km.jpg')
            .setTimestamp()
            .setFooter('Defensie', '');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}