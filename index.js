// const { Client, GatwayIntentBits } = require("discord.js");

// // intents - permissions
// const client = new Client({intents: [GatwayIntentBits.Guilds, GatwayIntentBits.GuildMessages, GatwayIntentBits.MessageContent] });

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) =>{
    if(message.author.bot) return ;

    if(message.content.startsWith('create')){
        const url= message.content.split('create')[1]
        return message.reply({
            content: "Generting Short ID for"+ url,
        });
    }
    message.reply({
        content: "Hi from bot",
    });
});

client.on('interactionCreate',interaction =>{
    console.log(interaction);
    interaction.reply("Pong");
});

client.login("MTIxMDY0MTQ3Mzg5NzUwNDgwOA.G_eT7m.Y_Mne_niJuPneP-P-MzLP7vnjDVBSiOoxR_ctA");