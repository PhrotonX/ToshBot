const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies your input (alpha).')
        .addStringOption(option =>
            option.setName('input')
            .setDescription('The input to echo back.')
            .setRequired(true))
};