const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Select a member and ban them.')
        .addUserOption(option => option.setName('target').setDescription('The member to ban'))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),
    async execute(interaction){
        const member = interaction.options.getMember('target');
        return interaction.reply({content: `You wanted to ban: ${member.user.username}`, ephemeral: true});
    },
};