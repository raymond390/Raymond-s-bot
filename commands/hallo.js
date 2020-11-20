const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry jij kan dit niet doen");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    if (!winnerCount) return message.reply("Geen aantal spelers opgegeven");
    if (!time) return message.reply("Geen tijd opgegeven");
    if (!item) return message.reply("Geen winnaars item opgegeven");

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Vervalt: ${dateEnd}`)
        .setDescription(item);

}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}