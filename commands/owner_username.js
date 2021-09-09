module.exports = {
	name: 'username',
	description: '!OWNER ONLY! Changes the bot\'s username.',
	options: [{
		name: 'username',
		description: 'What to change the bot\'s name to.',
		type: '3',
		required: 'true'
	}],
	async execute(interaction, client) {
		if(interaction.user.id != '456282270974607361'){
			await interaction.reply('You cannot command me, Mortal!');
		} else {
            try {
                option = interaction.options.get('argument')
                client.user.setUsername(option.value);
                await interaction.reply(`Username has been changed to: \`${option.value}\``);
            } catch(error) {
                console.log(error);
                await interaction.reply(`An error has occurred: ${error}`);
            }
		}
	},
};