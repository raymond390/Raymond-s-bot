const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    if(command === "!unban")
        if(!msg.member.hasPermission("BAN_MEMBERS")) {
          return msg.channel.send(`**${msg.author.username}**, Hoi`)
        }
        
        if(!msg.guild.me.hasPermission("BAN_MEMBERS")) {
          return msg.channel.send(`**${msg.author.username}**, I do not have perms to unban someone`)
        }
        
        let userID = args[0]
          msg.guild.fetchBans().then(bans=> {
          if(bans.size == 0) return 
          let bUser = bans.find(b => b.user.id == userID)
          if(!bUser) return
          msg.guild.members.unban(bUser.user)
    })
        
      ;}