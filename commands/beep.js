const {SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('Beep!'),
    async execute(interaction){
        await interaction.deferReply({ephemeral: true});
        await wait(4000);
        await interaction.editReply('Boop!');
        await interaction.followUp({content: 'Boop again!', ephemeral: true});
    },
};