module.exports = {
	name: 'error',
	once: true,
	execute(error) {
		console.log(`An error of type ${error}! has occured.`);
	},
};