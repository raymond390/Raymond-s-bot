const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const args = message.content.slice().split(" ");
const saymessage = args.join(" ");
message.channel.send(saymessage);
}

module.exports.help = {
    name: "say",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}