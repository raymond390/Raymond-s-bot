const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var test = args.slice(1).join(" ");
    
    var botEmbed = new discord.MessageEmbed()
    .setTitle('Defensie')
    .setColor("#0099ff")
    .setDescription(`
    **Redenen: ** ${test}`)
    .addField("")
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('https://f.jwwb.nl/public/g/w/t/temp-mxahzxdricxvqfpwpnhx/lm5nsv/km.jpg')
    .setTimestamp()
    .setFooter('Defensie', '');
}

module.exports.help = {
    name: "test",
    description: "",
    category: "Algemeen"
}