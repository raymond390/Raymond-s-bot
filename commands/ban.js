const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {

    client.on('message', message => {
    
        if (!message.guild) return;
      
      
        if (message.content.startsWith('!ban')) {
          const user = message.mentions.users.first()
        
          if (user) {
           
            const member = message.guild.member(user);
         
            if (member) {
             
              member.ban({
                reason: '...',
              }).then(() => {
                message.reply(`Succes vol verbannen ${user.tag}, Tot Ziens`); // this is the message that will be.
              }).catch(err => {
              
                message.reply('je hebt deze premisie waarschijnlijk niet'); // if a user does not have permission to use a command on a user or as a member, this message will be send.
    //** for my bot I would say message.reply(`${author.tag}, sorry, I was unable to ban this user! Check to see if there roles are above mine, or if this user is an admin!`)**\\
            
                console.error(err);
              });
            } else {
             
              message.reply('That user isn\'t in this guild!');
            }
          } else {
          
            message.reply('Geef een naam op');
          }
        }
      });
}

module.exports.help = {
    name: "ban",
    description: "Ban iemand",
    category: "Algemeen"
}