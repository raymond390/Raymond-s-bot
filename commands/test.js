const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var reason = args.slice(1).join(" ");
    
    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter()
        .setTimestamp()
        .setDescription(` **Redenen: ** ${reason}`)
        .addField()

}

module.exports.help = {
    name: "test",
    description: "",
    category: "Algemeen"
}