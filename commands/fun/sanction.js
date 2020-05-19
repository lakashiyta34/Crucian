const Command = require('../../interfaces/Command.js');

class Sanction extends Command {
    constructor(file) {
        super(file);
    }

    async run(bot, message) {
        let reaction = bot.lang.sanctionReaction.random();

        message.channel.send(reaction);
    }
}

module.exports = Sanction;