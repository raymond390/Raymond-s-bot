module.exports.run = async (client, message, args) => {

    return message.channel.send("Pong: " + (message.createdTimestamp - Date.now()) + " ms");

}

module.exports.help = {
    name: "ping",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}