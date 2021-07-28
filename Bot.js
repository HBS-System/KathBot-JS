
const token = require('./token.json');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`); //Write using tilde quites (` vs ') to let the formatting function
    
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return; // Cancels command if said message is either missing the prefix or the message sender is a bot

	const args = message.content.slice(config.prefix.length).trim().split(/ +/); //Removes the prefix from the command and saves them in a list named 'args'
	const command = args.shift().toLowerCase(); // Shifts the command to lowercase and stores it in a constant sting variable named 'command'

	if (command === 'ping') { // Simple. 
		message.channel.send('Pong!'); // Sends text to the channel the command was sent in

	} else if (command === 'beep') {
		message.channel.send('Boop!');

	} //End of command blocks

}); //End of client.on 'message' block

client.login(token);

