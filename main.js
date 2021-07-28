
const token = require('./token.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'kt!';

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`); //Write using tilde quites (` vs ') to let the formatting function
    
});
async function sendAsync(message, arg) {
	await message.channel.send(arg);

}
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; // Cancels command if said message is either missing the prefix or the message sender is a bot

	const args = message.content.slice(prefix.length).trim().split(/ +/); //Removes the prefix from the command and saves them in a list named 'args'
	const command = args.shift().toLowerCase(); // Shifts the command to lowercase and stores it in a constant sting variable named 'command'

	switch (command) { // Usage of switch case for i dont know reasons
		case 'ping':
			await message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp}ms. API: ${Math.round(client.ws.ping)}ms\``); 
			// Sends message and API latency to the channel the command was sent in
			break;

		case 'timeout':
			await message.channel.send('I will send a second message in 2 seconds.');
			setTimeout(function(){
				message.channel.send('boobies');
			}, 2000); // USE THIS IN THE FUTURE, FUCK YOU FUTURE ME
			break;

	};
}); //End of client.on 'message' block

client.login(token);

