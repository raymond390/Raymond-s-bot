const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    return message.channel.send.user.name("test");

}

module.exports.help = {
    name: "claim",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}