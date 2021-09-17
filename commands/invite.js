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
				{ name: 'Development:', value: 'https://discord.com/oauth2/authorize?client_id=610044394854416404&permissions=0&scope=applications.commands%20bot' },
				{ name: 'Release:', value: 'https://discord.com/api/oauth2/authorize?client_id=596683881575612429&permissions=0&scope=applications.commands%20bot' },
			);

		interaction.reply({ embeds: [embed] })
			.catch(console.error);
	},
};