const Discord = require("discord.js");
const { token } = require("./config.json");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}.`);
});

client.on("messageCreate", (msg) => {
	if (msg.content.substr(0, 5) === "!play") {
		if (msg.author.username === "TakeYama") {
			msg.channel.send("!stop");
		}
	}
});

client.login(token);
