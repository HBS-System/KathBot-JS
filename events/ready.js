module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Successfuly logged in as ${client.user.tag}!`);
	},
};