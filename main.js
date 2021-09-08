const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v8');
const { Client, Collection, Intents } = require('discord.js');

const token = require('./token.json');
const botid = '610044394854416404';

//Create the client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();


//Below code is for loading comands from commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


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


//Below code is for local/global slash command publishing
const commands = client.commands.map(({ execute, ...data }) => data); 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing local application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(botid, '711790203148304404' ), //Used to reload all commands to the development server ONLY.
			{ body: commands },
		); 
		//Above block is used to reload all commands to the development server ONLY.

		/*await rest.put(
			Routes.applicationCommands(botid), 
			{ body: commands },
		);*/ 
		//Above block is used to publish all commands to ALL servers.

		console.log('Successfully reloaded local application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

//self explanatory
client.login(token);