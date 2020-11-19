const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args, options) => {

    if (!message.member.voice.channel) return message.reply("Connecteer met een spraak kanaal");

    // if (message.guild.me.voice.channel) return message.channel.send("Sorry, de bot is al verbonden.");

    if (!args[0]) return message.reply("Gelieven een url mee te geven");

    var validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send("Sorry, Gelieve een **juiste** url op te geven.");

    var info = await ytdl.getInfo(args[0]);

    var data = options.active.get(message.guild.id) || {};

    if (!data.connection) data.connection = await message.member.voice.channel.join();

    if (!data.queue) data.queue = [];

    data.guildID = message.guild.id;

    data.queue.push({

        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id

    });

    if (!data.dispatcher) {
        Play(client, options, data);
    } else {
        message.channel.send(`Toegevoegd aan de queue: ${info.title} | Aangevraagd door: ${message.author.tag}`);
    }

    options.active.set(message.guild.id, data);

    // var options = { seek: 3, volume: 1 };

    // var channelJoin = message.member.voice.channel.join()
    //     .then(voiceChannel => {

    //         var stream = ytdl(args[0], { filter: 'audioonly' });
    //         var dispatcher = voiceChannel.play(stream, options);

    //     }).catch(console.error);

    // message.channel.send(`Nu aan het spelen ${info.title}`);

}

async function Play(client, ops, data) {

    client.channels.cache.get(data.queue[0].announceChannel).send(`Nu aan het spelen: ${data.queue[0].songTitle} - aangevraagd door: ${data.queue[0].requester}`);

    var options = { seek: 2, volume: 1, bitrate: 128000 };

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, { filter: 'audioonly' }), options);

    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('finish', function () {
        Finish(client, ops, this);
    })

}

function Finish(client, ops, dispatcher) {

    var fetechedData = ops.active.get(dispatcher.guildID);

    fetechedData.queue.shift();

    if (fetechedData.queue.length > 0) {

        ops.active.set(dispatcher.guildID, fetechedData);

        Play(client, ops, fetechedData);

    } else {

        ops.active.delete(dispatcher.guildID);

        var voiceChannel = client.guilds.cache.get(dispatcher.guildID).me.voice.channel;

        if (voiceChannel) voiceChannel.leave();

    }

}


module.exports.help = {
    name: "play",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}