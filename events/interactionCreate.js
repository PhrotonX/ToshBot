module.exports = {
    name: 'interactionCreate',
    execute(interaction){
        console.log('\n\n==========================================================================');
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
        console.log('==========================================================================');
        console.log(interaction);
        console.log('==========================================================================\n\n');
    }
}