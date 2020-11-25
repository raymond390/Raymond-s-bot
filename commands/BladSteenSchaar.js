const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // sps m4a1, siper, clock

    if (!args[0]) return message.reply("Gebruik sps <colt, sniper, clock>");

    var options = ["colt", "sniper", "clock"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "COLT") {

        if (result == "sniper") {

            return message.channel.send(`Ik heb ${result} , Ik win`);

        } else if (result == "clock") {

            return message.channel.send(`Ik heb ${result} , Jij wint`);

        } else if (result == "colt") {

            return message.channel.send(`Ik heb ${result} , Het is gelijkspel`);

        }

    }
    else if (args[0].toUpperCase() == "SNIPER") {

        if (result == "clock") {

            return message.channel.send(`Ik heb ${result} , Ik win`);

        } else if (result == "colt") {

            return message.channel.send(`Ik heb ${result} , Jij wint`);

        } else if (result == "sniper") {

            return message.channel.send(`Ik heb ${result} , Het is gelijkspel`);

        }

    } else if (args[0].toUpperCase() == "CLOCK") {

        if (result == "colt") {

            return message.channel.send(`Ik heb ${result} , Ik win`);

        } else if (result == "sniper") {

            return message.channel.send(`Ik heb ${result} , Jij wint`);

        } else if (result == "clock") {

            return message.channel.send(`Ik heb ${result} , Het is gelijkspel`);

        }

    }

}

module.exports.help = {
    name: "oorlog",
    description: "doe .oorlog colt,sniper,clock",
     category: "Informatie"
}