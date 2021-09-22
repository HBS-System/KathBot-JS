const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'test',
	description: 'This command is currently in use to test various code.',
	async execute(interaction, client) {
        const embed = new MessageEmbed()
			.setColor('#ff88ff')
			.setTitle('Github!')
			.setURL('https://anarch1sts0uls.com')
			.setAuthor('myass', 'https://anarch1sts0uls.com')
			.setDescription('Some description here')
			.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.addField('Inline field title', 'Some value here', true)
			.setTimestamp()
			.setFooter('Created by: undef_#0314');

		interaction.reply({ embeds: [embed] })
			.then(() => console.log('Reply sent.'))
			.catch(console.error);
	},
};