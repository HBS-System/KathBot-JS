const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'info',
	description: 'Run this command for more information about this bot.',
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#ff88ff')
			.setTitle('Here\'s some links to go to!')
			.setAuthor(interaction.user.tag, interaction.user.avatarURL())
			.setTimestamp()
			.setFooter('Created by: undef_#0314')
			.addFields(
				{ name: 'Github:', value: 'https://github.com/HBS-System/KathBot-JS' },
				{ name: 'Trello:', value: 'https://trello.com/b/UcTLWZRt/kathbot-rewrite-javascript' },
				{ name: 'Support Server:', value: 'https://discord.gg/scQw6vRBfE' }
			);

		interaction.reply({ embeds: [embed] })
			.catch(console.error);
	},
};