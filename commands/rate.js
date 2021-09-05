module.exports = {
	name: 'rate',
	description: 'Rates the given arguments.',
	options: [{
		name: "argument",
		description: "The thing you want to rate.",
		type: "3",
		required: "true"
	}],
	async execute(interaction) {
		option = interaction.options.get("argument")
		await interaction.reply('Hmmm... I rate ${option.value} a ${Math.floor(Math.random() * 11).toString()}/10!');
	},
};