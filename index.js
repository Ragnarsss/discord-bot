const {Client, GatewayIntentBits} = require('discord.js')
require('dotenv').config()
const config = require('./config.json')
const i18n = require('i18n')

const client = new Client({ intents: [GatewayIntentBits.Guilds]})

client.once('ready', () => {
    console.log("BRRRRRRRRRRRRRR")
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return

    const {commandName} = interaction

    if (commandName === 'ping') {
        await interaction.reply('Pong!')
    }
})

client.login(config.token)