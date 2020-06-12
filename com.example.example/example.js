const Discord = require("discord.js");
const fs = require('fs');
const config = require('/home/pi/Desktop/Unicord/jsmaven/conf.ts');
const yaml = require('js-yaml');
const db = require("quick.db")
const package = yaml.safeLoad(fs.readFileSync(config.friendlyblobs.giphy.jsmaven)) // This refers to your jsmaven.yaml file.
exports.run = (client, message, args, level) => {
    client.mongoprefix.findOne({ guild: message.guild.id }, async (err, prefix) => { // Unicord has recently switched to mongoDB for prefixes.
    const settings = message.settings = client.getSettings(message.guild);
    if (db.get(`${message.guild.id}.nameOfPackageNOTFRIENDLYNAME`) == false) return;
        if (db.get(`${message.guild.id}.nameOfPackageNOTFRIENDLYNAME`) == null) return;
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
}
exports.help = {
    name: "example",
    description: "Example command, hah",
    usage: "example"
};
