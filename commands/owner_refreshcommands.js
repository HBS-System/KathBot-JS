const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v8');

const token = require('../token.json');
const botid = '610044394854416404';

module.exports = {
	name: 'refresh',
	description: "!OWNER ONLY! Refreshes commands to this server for use.",
	async execute(interaction, client) {
		if(interaction.user.id != "456282270974607361"){
			console.log(interaction.user.id);
			await interaction.reply('You cannot command me, Mortal!');
		} else {
			const commands = client.commands.map(({ execute, ...data }) => data); 

			const rest = new REST({ version: '9' }).setToken(token);

			(async () => {
				try {
					console.log('Command: Started refreshing local application (/) commands.');
					await interaction.deferReply('Started refreshing local application (/) commands...');
	
					await rest.put(
						Routes.applicationGuildCommands(botid, interaction.guild.id), //Used to reload all commands to the development server ONLY.
						{ body: commands },
					); 
					//Above block is used to reload all commands to the development server ONLY.
	
					/*await rest.put(
						Routes.applicationCommands(botid), 
						{ body: commands },
					);*/ 
					//Above block is used to publish all commands to ALL servers.

					console.log('Command: Successfully reloaded local application (/) commands.');
					await interaction.editReply('Successfully reloaded local application (/) commands.');
				} catch (error) {
					console.log(error);
					await interaction.editReply('An error has occurred.');
				}
			})();
		}
	},
};