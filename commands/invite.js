const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Sends a link to invite this bot to other servers you are administrator in!',
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#ff88ff')
			.setTitle('Here\'s an invite link to this bot!')
			.setAuthor(interaction.user.tag, interaction.user.avatarURL())
			.setTimestamp()
			.setFooter('Created by: undef_#0314')
			.addFields(
				{ name: 'Development:', value: 'https://discord.com/oauth2/authorize?client_id=610044394854416404&scope=applications.commands' },
				{ name: 'Release:', value: 'https://discord.com/oauth2/authorize?client_id=596683881575612429&scope=applications.commands' },
			);

		interaction.reply({ embeds: [embed] })
			.catch(console.error);
	},
};