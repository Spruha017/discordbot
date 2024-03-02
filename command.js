const { REST, Routes } = require("discord.js");

const commands = [
    {
        name: "ping",
        description : "Replies with Pong !",
    },
];

const rest = new REST({ version: "10"}).setToken("MTIxMDY0MTQ3Mzg5NzUwNDgwOA.G_eT7m.Y_Mne_niJuPneP-P-MzLP7vnjDVBSiOoxR_ctA");

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands('1210641473897504808'), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();

