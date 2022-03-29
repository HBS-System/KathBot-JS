const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v8');
const { Client, Collection, Intents } = require('discord.js');

const token = require('./token.json');
const { ENGINE_METHOD_DIGESTS } = require('constants');
const botid = '610044394854416404'; //Dev Client ID
// const botid = '596683881575612429'; //Release Client ID


//Create the client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();


//Below code is for loading comands from commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const commands = client.commands.map(({ execute, ...data }) => data); 


//Below code is for loading events from events folder
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}


const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing local & global application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(botid, '711790203148304404' ), //Used to reload all commands to the development server ONLY.
			{ body: commands },
		); 
		//Above block is used to reload all commands to the development server ONLY.

		await rest.put(
			Routes.applicationCommands(botid), 
			{ body: commands },
		);
		//Above block is used to publish all commands to ALL servers.

		console.log('Successfully reloaded local & global application (/) commands.\nPlease allow a minimum of one hour for all servers to update global commands.');
	} catch (error) {
		console.error(error);
	}
})();


//self explanatory
client.login(token);