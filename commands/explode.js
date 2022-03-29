module.exports = {
	name: 'explode',
	description: 'Explodes you.',
	async execute(interaction) {
		await interaction.reply('You have exploded. Congrats!');
	},
}