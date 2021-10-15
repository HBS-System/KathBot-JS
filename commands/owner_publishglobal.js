const commands = require('../main.js');
const botid = require('../main.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v8');

const token = require('../token.json')

module.exports = {
	name: 'publish',
	description: '!OWNER ONLY! Refreshes commands globally. May take an hour to complete.',
	async execute(interaction) {
		if(interaction.user.id != '456282270974607361'){
			await interaction.reply('You cannot command me, Mortal!');
		} else {
			const rest = new REST({ version: '9' }).setToken(token);

			(async () => {
				try {
					console.log('Command: Starting refreshing global application (/) commands...');
					await interaction.deferReply('Starting refreshing global application (/) commands...');

					await rest.put(
						Routes.applicationCommands(botid), 
						{ body: commands },
					);
					//Above block is used to publish all commands to ALL servers.

					console.log('Command: Successfully began refresh of global application (/) commands.\nPlease allow a minimum of one hour for all servers to update.');
					await interaction.editReply('Successfully began refresh of global application (/) commands.\nPlease allow a minimum of one hour for all servers to update.');
				} catch (error) {
					console.log(error);
					await interaction.editReply('An error has occurred.');
				}
			})();
		}
	},
};