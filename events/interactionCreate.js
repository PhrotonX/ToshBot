module.exports = {
    name: 'interactionCreate',
    execute(interaction){
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            return command.execute(interaction);
        } catch (error) {
            console.error(error);
            return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
        
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
    }
}