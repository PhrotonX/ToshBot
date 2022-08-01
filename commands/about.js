const {SlashCommandBuilder} = require('discord.js');
const { version } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Display bot information'),
    async execute(interaction){
        return interaction.reply(`Toshbot v${version} - Work in Progress. \nDeveloper: Phroton`);
    },
};