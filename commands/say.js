module.exports = {
	name: 'say',
	description: 'Makes me say words!',
	options: [{
		name: 'argument',
		description: 'What to make the bot repeat',
		type: '3',
		required: 'true'
	}],
	async execute(interaction) {
		option = interaction.options.get('argument')
		await interaction.reply(option.value);
	},
};