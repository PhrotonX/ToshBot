const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Displays GIFs (alpha).')
        .addStringOption(option =>
            option.setName('category')
            .setDescription('Choose a category')
            .setRequired(true)
            .addChoices(
                {name: 'Funny', value: 'gif_funny'},
                {name: 'Meme', value: 'gif_value'},
                {name: 'Movie', value: 'gif_movie'},
            ))
};