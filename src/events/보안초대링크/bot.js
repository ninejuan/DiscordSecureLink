const { MessageEmbed, Formatters } = require('discord.js');
const client = require('../../../index')


client.on('ready', async () => {
	const webPortal = require('./server');
	webPortal.load(client);
});