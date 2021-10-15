module.exports = {
	name: 'announce',
	description: '!OWNER ONLY! Announces arguments to all servers allowed.',
	async execute(interaction) {
		if(interaction.user.id != '456282270974607361'){
			await interaction.reply('You cannot command me, Mortal!');
		} else {
			await interaction.reply('This command is currently in development.');
		}
	},
};