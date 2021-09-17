const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Lists available commands.',
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#ff88ff')
			.setTitle('Here\'s a list of my current commands!')
			.setAuthor(interaction.user.tag, interaction.user.avatarURL())
			.setTimestamp()
			.setFooter('Created by: undef_#0314')
			.addFields(
				{ name: '8ball:		Shake the magical 8ball!', value: 'Usage: `/8ball [argument]`' },
				{ name: 'cat:		WIP', value: 'Usage: `/cat`' },
				{ name: 'info:		Gives you information about this bot.', value: 'Usage: `/info`' },
				{ name: 'invite:	Gives you the link to invite this bot.', value: 'Usage: `/invite`' },
				{ name: 'jotekick:	WIP', value: 'Usage: `/votekick`' },
				{ name: 'ping:		Sends the current API and bot latency.', value: 'Usage: `/ping`' },
				{ name: 'quote:		WIP', value: 'Usage: `/quote`' },
				{ name: 'rate:		Rates any given argument.', value: 'Usage: `/rate [argument]`' },
				{ name: 'say:		Makes the bot repeat the given argument.', value: 'Usage: `/say [argument]`' },
				{ name: 'tarot:		WIP', value: 'Usage: `/tarot`' },
			);

		interaction.reply({ embeds: [embed] })
			.catch(console.error);
	},
};