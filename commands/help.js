module.exports = {
	name: 'help',
	description: 'Lists available commands.',
	async execute(interaction) {
		await interaction.reply('This command is currently in development.');
	},
};