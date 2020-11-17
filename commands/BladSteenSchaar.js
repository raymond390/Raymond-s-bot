const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // sps steen, papier, schaar

    if (!args[0]) return message.reply("Gebruik sps <steen, paapier, schaar>");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "STEEN") {

        if (result == "papier") {

            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Ik win`);

        } else if (result == "schaar") {

            return message.channel.send(`Ik heb ${result} :scissors:, Jij wint`);

        } else if (result == "steen") {

            return message.channel.send(`Ik heb ${result} :moyai:, Het is gelijkspel`);

        }

    }
    else if (args[0].toUpperCase() == "PAPIER") {

        if (result == "schaar") {

            return message.channel.send(`Ik heb ${result} :scissors:, Ik win`);

        } else if (result == "steen") {

            return message.channel.send(`Ik heb ${result} :moyai:, Jij wint`);

        } else if (result == "papier") {

            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Het is gelijkspel`);

        }

    } else if (args[0].toUpperCase() == "SCHAAR") {

        if (result == "steen") {

            return message.channel.send(`Ik heb ${result} :moyai:, Ik win`);

        } else if (result == "papier") {

            return message.channel.send(`Ik heb ${result} :notepad_spiral:, Jij wint`);

        } else if (result == "schaar") {

            return message.channel.send(`Ik heb ${result} :scissors:, Het is gelijkspel`);

        }

    }

}

module.exports.help = {
    name: "sps",
    description: "",
    category: ""
}