"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});
client.login('MzQ5MjgzMjc1NTM1MDI0MTM1.DHzO9A.pCfgqJgsmMML12QtYbUu2kEfTiM');
