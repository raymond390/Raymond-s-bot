const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var dienst = args.slice(0).join(" ");

    var time = args.slice(2).join(" ");

    var type = args.slice(1).join(" ");

    var a = args.slice(4).join(" ");

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Defensie')
    .setColor("#0099ff")
    .setDescription(`
    ** Dienst **  ${dienst}
    ** type-Training ** ${type}
    ** Host ** ${time}`)
    .setFooter('Defensie', '');


    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "training",
    description: "",
    category: "Algemeen"
}