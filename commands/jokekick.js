module.exports = {
	name: 'votekick',
	description: 'Initiates a (fake) votekick on the mentioned user. Requires reason.',
	async execute(interaction) {
		await interaction.reply('This command is currently in development.');
	},
};