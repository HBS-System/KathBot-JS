const seedrandom = require('seedrandom');
  
module.exports = {
	name: 'rate',
	description: 'Rates the given arguments.',
	options: [{
		name: 'argument',
		description: 'The thing you want to rate.',
		type: '3',
		required: 'true'
	}],
	async execute(interaction) {
		option = interaction.options.get('argument')
		var rng = seedrandom(option.value);
		await interaction.reply(`Hmmm... I rate ${option.value} a ${Math.floor(rng() * 11).toString()}/10!`);
	},
};