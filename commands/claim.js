const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "761879667124600842";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {


        // Channel voor logging
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");
                   

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }



}
module.exports.help = {
    name: "claim",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}