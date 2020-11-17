const database = require("../database.json");
const mysql = require("mysql");

module.exports.run = async (client, message, args) => {

    var con = mysql.createConnection({
        host: database.host,
        user: database.user,
        password: database.password,
        database: database.database
    });

    con.connect(err => {
        if (err) throw err;
    });

    // !role gebruiker rolNaam verwijderenBool

    var user = message.guild.member(message.mentions.users.first());
    var roleName = args[1];
    var remove = args[2];

    if (roleName) {
        var roleInfo = message.guild.roles.cache.find(r => r.name === roleName);
        if (!roleInfo) return message.channel.send("Rol bestaat niet.");
        var roleID = roleInfo.id;
    }

    if (user && !roleName) {

        con.query(`SELECT IDRole FROM rollen WHERE IDUser = '${user.id}'`, (err, rows) => {

            if (err) throw err;

            if (rows.length > 0) {

                var listRoles = "**Rol(len) van deze persoon: ** \n\n";

                for (let index = 0; index < rows.length; index++) {
                    const role = rows[index];

                    var roleNameList = message.guild.roles.cache.get(role.IDRole).name;

                    listRoles += `- ${roleNameList} \n`;
                }

                return message.channel.send(listRoles);

            } else {
                return message.channel.send("Deze gebruiker heeft geen rollen.");
            }

        });


    } else if (user && roleName && !remove) {

        con.query(`SELECT * FROM rollen WHERE IDUser = '${user.id}' AND IDRole = '${roleID}'`, (err, rows) => {

            if (err) throw err;

            if (rows.length > 0) {
                return message.channel.send("Deze gebruiker heeft deze rol al.");
            } else {
                con.query(`INSERT INTO rollen (IDUser, IDRole) VALUES ("${user.id}","${roleID}")`);
                user.roles.add(roleID);
                return message.channel.send("Rol is toegevoegd");
            }

        });

    } else if (user && roleName && remove == "yes") {


        con.query(`DELETE FROM rollen WHERE IDUser = '${user.id}' AND IDRole = '${roleID}'`, (err, rows) => {

            if (err) throw err;

            if (rows.affectedRows == 1) {

                user.roles.remove(roleID);
                return message.channel.send(`Weggehaald van rol ${roleName}.`);

            } else {
                return message.channel.send("Rol is al verwijderd.");
            }

        });


    } else {
        message.channel.send("Gebruik het command als volgt: !role gebruikersnaam roleNaam verwijderen");
    }

}

module.exports.help = {
    name: "role",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}