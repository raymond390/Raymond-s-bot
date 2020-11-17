const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "761879667124600842";

    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Het ticket is gemarkeerd als **compleet**.")
            .setFooter("Ticket gesloten");

        // Channel voor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
        if (!ticketChannel) return message.reply("Kanaal bestaat niet");

        ticketChannel.send(embedCreateTicket);

    } else {

        message.channel.send("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "close"
}