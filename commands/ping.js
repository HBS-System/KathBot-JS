module.exports = {
	name: 'ping',
	description: 'Replies with current Latency',
	async execute(interaction, client) {
		await interaction.reply('Pong!');
		await interaction.editReply(`Pong!\n\`API Ping: ${client.ws.ping}ms\nLatency: ${Date.now() - interaction.createdTimestamp}ms\``);
	},
};