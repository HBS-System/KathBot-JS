module.exports = {
	name: 'cat',
	description: 'Gives you a random cat!',
	async execute(interaction) {
		await interaction.reply('This command is currently in development.');
	},
};