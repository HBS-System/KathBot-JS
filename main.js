//const { prefix } = require('./config.json');
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v8');
const { Discord, Client, Collection, Intents } = require('discord.js');
const token = require('./token.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

const commands = client.commands.map(({ execute, ...data }) => data); 

const rest = new REST({ version: '8' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing local application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands('610044394854416404', '711790203148304404' ),
			{ body: commands },
		);

		console.log('Successfully reloaded local application (/) commands.');
	} catch (error) {
		console.log(error);
	}
})();

client.login(token);