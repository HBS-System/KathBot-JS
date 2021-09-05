module.exports = {
	name: 'say',
	description: 'Makes me say words!',
	async execute(interaction) {
		await interaction.reply('This command is currently in development.');
	},
};