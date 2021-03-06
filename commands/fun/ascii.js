const Command = require('../../structures/Command.js');
const figlet = require('figlet');

class Ascii extends Command {
    constructor(file) {
        super(file);
    }

    async run(message, args) {
        if (args.length < 1) {
            message.reply(bot.lang.lackOfArguments);
    
            return;
        }

        figlet.text(args.join(' '), {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, (err, rendered) => {
            if (err) {
                message.reply(bot.lang.somethingWentWrong.random());

                return;
            }

            if (rendered.length > 2000) {
                message.reply(bot.lang.messageTooLong.random());

                return;
            }

            if (rendered.trim().length === 0) {
                message.reply(bot.lang.invalidArguments);

                return;
            }

            message.channel.send(rendered, { code: 'md' });
        });
    }
}

module.exports = Ascii;
