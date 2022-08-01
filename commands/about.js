const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Display bot information'),
    async execute(interaction){
        return interaction.reply(`Toshbot v${version}`);
    },
};