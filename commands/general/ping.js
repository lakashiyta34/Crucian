const Command = require('../../structures/Command.js');

class Ping extends Command {
    constructor(file) {
        super(file);
    }

    async run(message) {
        let ping = bot.ws.ping.toFixed(1);

        message.reply(bot.lang.pingMessages.random().format(ping));
    }
}

module.exports = Ping;
