const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("Hallo!!");z

}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}