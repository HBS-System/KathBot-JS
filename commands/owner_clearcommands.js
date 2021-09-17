const commands = require('../main.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v8');

const token = require('../token.json');
const botid = '596683881575612429';

module.exports = {
	name: 'clearcommands',
	description: '!OWNER ONLY! Refreshes commands globally. May take an hour to complete.',
	async execute(interaction) {
		if(interaction.user.id != '456282270974607361'){
			await interaction.reply('You cannot command me, Mortal!');
		} else {
			const rest = new REST({ version: '9' }).setToken(token);

			(async () => {
				try {
					console.log('Command: Clearing local application (/) commands...');
					await interaction.deferReply('Clearing local application (/) commands...');

					await rest.put(
						Routes.applicationCommands(botid, interaction.guild.id),
						{ body: '' },
					);

					console.log('Command: Successfully cleared local application (/) commands.');
					await interaction.editReply('Successfully cleared local application (/) commands.');
				} catch (error) {
					console.log(error);
					await interaction.editReply('An error has occurred.');
				}
			})();
		}
	},
};