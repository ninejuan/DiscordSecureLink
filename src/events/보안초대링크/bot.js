const { MessageEmbed, Formatters } = require('discord.js');
const { stripIndents } = require('common-tags');
const client = require('../../../index')


client.on('ready', async () => {
	const webPortal = require('./server');
	webPortal.load(client);
});