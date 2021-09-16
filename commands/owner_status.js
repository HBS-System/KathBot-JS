module.exports = {
	name: 'status',
	description: '!OWNER ONLY! Adds the given argument to the bot\'s status.',
	options: [{
		name: 'argument',
		description: 'What to add to the status.',
		type: '3',
		required: 'true'
	}],
	async execute(interaction, client) {
		if(interaction.user.id != '456282270974607361'){
			await interaction.reply('You cannot command me, Mortal!');
		} else {
			try {
				option = interaction.options.get('argument')
				client.user.setActivity(option.value);
				console.log(option)
				interaction.reply(`Status has been changed to: `)
			} catch(error) {
				console.log(error);
				await interaction.reply(`An error has occurred: ${error}`);
			}
		}
	},
};