const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //!giveaway aantalSpeler tijd berichtjeTekst test test

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

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }

        }

        if (peopleReacted.length == 0) {
            return message.channel.send("Niemand heeft gewonnen dus de bot wint.");
        }

        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Er zijn te weinig mensen die mee deden daarom heeft de bot gewonnen.");
        }

        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if (winners[o] == peopleReacted[random]) {
                    inList = true;
                    y--;
                    break;
                }

            }

            if (!inList) {
                winners.push(peopleReacted[random]);
            }

        }

        for (let y = 0; y < winners.length; y++) {

            message.channel.send("Proficiat: " + winners[y].username + `Je hebt gewonnen ${item}`);

        }

    }, time * 1000)

}

module.exports.help = {
    name: "giveaway",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}