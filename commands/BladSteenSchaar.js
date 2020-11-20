const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // sps m4a1, siper, clock

    if (!args[0]) return message.reply("Gebruik sps <m4a1, sniper, clock>");

    var options = ["m4a1", "sniper", "clock"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "STEEN") {

        if (result == "sniper") {

            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Ik win`);

        } else if (result == "clock") {

            return message.channel.send(`Ik heb ${result} :scissors:, Jij wint`);

        } else if (result == "m4a1") {

            return message.channel.send(`Ik heb ${result} :moyai:, Het is gelijkspel`);

        }

    }
    else if (args[0].toUpperCase() == "PAPIER") {

        if (result == "clock") {

            return message.channel.send(`Ik heb ${result} :scissors:, Ik win`);

        } else if (result == "m4a1") {

            return message.channel.send(`Ik heb ${result} :moyai:, Jij wint`);

        } else if (result == "sniper") {

            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Het is gelijkspel`);

        }

    } else if (args[0].toUpperCase() == "SCHAAR") {

        if (result == "m4a1") {

            return message.channel.send(`Ik heb ${result} :moyai:, Ik win`);

        } else if (result == "sniper") {

            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Jij wint`);

        } else if (result == "clock") {

            return message.channel.send(`Ik heb ${result} :scissors:, Het is gelijkspel`);

        }

    }

}

module.exports.help = {
    name: "sps",
    description: "",
    category: ""
}