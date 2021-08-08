const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "Roblox", url: "https://web.roblox.com/users/1583842205/profile"}, { label: "Roblox Dev Group", url: "https://web.roblox.com/groups/10174034/FutureDev-Games#!/about"}, { label: "Discord RPC", url: "https://web.roblox.com/groups/10174034/FutureDev-Games#!/about"}],
            details: "All Links!",
            largeImageKey: "discord_rpc",
            largeImageText: "Roblox Account"
        }).catch(err => console.log(err));

        console.log("DiscordJS:Discord RPC was ENABLED!");
        console.log("DiscordRPC:Updated Buttons");
        console.log("DiscordRPC:Updated Icon");
        console.log("DiscordJS:Done.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();
