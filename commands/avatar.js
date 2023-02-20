const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Devuelve el avatar de quien solicita')
        .addUserOption(option => option.setName('objetivo').setDescription('El que sapea el avatar es gay')),
    async run(interaction) {
        return console.log(interaction)
        const user = interaction.options.getUser()
    }
}