const commands = require('../main.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v8');

const token = require('../token.json');
const botid = '596683881575612429';

module.exports = {
	name: 'guildCreate',
	execute(guild) {
		const rest = new REST({ version: '9' }).setToken(token);

		(async () => {
			try {
				console.log('onJoin: Started refreshing local application (/) commands.');

				await rest.put(
					Routes.applicationGuildCommands(botid, guild.id), //Used to reload all commands to the server this command was run in.
					{ body: commands },
				); 
				//Above block is used to reload all commands to the server the command is run in.

				/*await rest.put(
					Routes.applicationCommands(botid), 
					{ body: commands },
				);*/ 
				//Above block is used to publish all commands to ALL servers.

				console.log('onJoin: Successfully reloaded local application (/) commands.');
			} catch (error) {
				console.log(error);
			}
		})();
	},
};