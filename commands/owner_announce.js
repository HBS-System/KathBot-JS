module.exports = {
	name: 'announce',
	description: '!OWNER ONLY! Announces arguments to all servers allowed.',
	async execute(interaction) {
		await interaction.reply('This command is currently in development.');
	},
};