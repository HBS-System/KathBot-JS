module.exports = {
	name: '8ball',
	description: 'Shake the magic 8ball!',
	options: [{
		name: "question",
		description: "The question you want to ask.",
		type: "3"
	}],
	
	async execute(interaction) {

		option = interaction.options.get("question")

		response = [
			"It is certain.",
			"It is decidedly so.",
			"Without a doubt.",
			"Yes - definitely.",
			"You may rely on it.",
			"As I see it, yes.",
			"Most likely.",
			"Outlook good.",
			"Yes.",
			"Signs point to yes.",
			"Reply hazy, try again.",
			"Ask again later.",
			"Better not tell you now.",
			"Cannot predict now.",
			"Concentrate and ask again.",
			"Don't count on it.",
			"My reply is no.",
			"My sources say no.",
			"Outlook not so good.",
			"Very doubtful.",
		]

		await interaction.reply('Hmmm... I rate ' + option.value + ' a ' + Math.floor(Math.random() * 11).toString());

	},
};