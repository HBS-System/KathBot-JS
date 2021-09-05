module.exports = {
	name: 'status',
	description: "!OWNER ONLY! Publishes commands to all servers for use.",
	async execute(interaction) {
		await interaction.reply('This command is currently in development.');
	},
};