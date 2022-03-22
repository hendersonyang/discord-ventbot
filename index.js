require("dotenv").config()

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.DIRECT_MESSAGES], partials: ['CHANNEL'] });
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

let replies = ["That sounds horrible.", "Wow.", "When people ask me stupid questions, it is my legal obligation to give a sarcastic remark.", "That sucks.", "Oh oh.", "Damn, that's terrible.", "RIP", "Good luck man.", "Feels bad man.", "You'll get over it.", "Ok", "That's cool.", "You need to show me how to do that.", "That's the point."]

let ohohwords = ["suicide", "kill", "sad", "depressed", "hurts"]

function findCommonElement(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}

client.on("messageCreate", (message) => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type !== "DM") return;
    if (findCommonElement(message.content.toLowerCase().split(" "), ohohwords)) {
        message.channel.send("A keyword related to suicide was detected.\n\nPlease call (800) 273-8255 or Text HOME to 741741")
        return
    }
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
})

client.login(process.env.discord_token)