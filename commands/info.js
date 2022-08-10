const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Displays info about user or server (alpha).')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about the user.')
                .addUserOption(option => option.setName('target').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server.'))
};