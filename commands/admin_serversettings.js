module.exports = {
	name: 'settings',
	description: 'This command is used to set up local settings for the bot. Requires administrator permission',
	async execute(interaction, client) {
		await interaction.reply('This command is currently in development.');
	},
};