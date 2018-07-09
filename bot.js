const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDY1OTg1MzkyMzg3MDMxMDY3.DiVsVw.kYW0b34cueFrsPxFwYOxfp2pKtU);
