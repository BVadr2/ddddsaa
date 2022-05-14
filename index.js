global.Discord = require("discord.js") //utilizzando "global." non dovrai tutte le volte scrivere const Discord = require("discord.js") nei module.exports (scoprirai poi cosa sono)
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token) // il token del tuo bot

client.on("ready",() =>{
    console.log("BOT ON")
})
client.on("messageCreate", (message) => {
    if(message.content == "!prova"){
        message.channel.send("Prova")
    }

    if(message.content == "!ciao"){
        message.channel.send("ciao")
    }
    if(message.content == "crediti"){
        message.channel.send("yasuoeditz#4401")
    }

   
    
})


client.on("messageCreate",(message) => {
    console.log(message)
})