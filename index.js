const {Client, GatewayIntentBits} = require('discord.js')
require('dotenv').config()
const config = require('./config.json')
const i18n = require('i18n')
const fs = require('fs')

const client = new Client({ intents: [GatewayIntentBits.Guilds]})

client.commands = new Collection() 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command)
}

client.once('ready', () => {
    console.log("BRRRRRRRRRRRRRR")
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) return

    try {
        await command.run(interaction)
    } catch (e) {
        console.error(e)
        return interaction.reply('Error al ejecutar interaccion')
    }
})

client.login(config.token)