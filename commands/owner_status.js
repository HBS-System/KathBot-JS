module.exports = {
	name: 'status',
	description: "!OWNER ONLY! Adds the given argument to the bots status.",
	async execute(interaction) {
		await interaction.reply('This command is currently in development.');
	},
};