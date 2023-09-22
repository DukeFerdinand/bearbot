import {Client} from 'tmi.js'
import {config} from 'dotenv'

import {Logger} from './logger'
import { help } from "./commands/help";
import { getBearJoke } from "./commands/bearJokes";
import { heyBearbot } from "./commands/heyBearbot";

config()

const logger = new Logger('main-thread');

const bearEmoji = '🐻';

logger.log(`${bearEmoji} Starting bear bot...`);

async function main() {
    logger.log(`${bearEmoji} Bear bot started!`);

    const client = new Client({
        options: {debug: false},
        connection: {
            reconnect: true,
            secure: true,
        },
        identity: {
            username: 'abearygoodbot',
            password: `oauth:${process.env.TWITCH_ACCESS_TOKEN}`,
        }
    });

    // Connect to Twitch:
    // ------------------
    await client.connect();

    // Setup listeners
    // ---------------
    client.once('join', (channel, username, self) => {
        if (self) {
            logger.log(`${bearEmoji} Joined ${channel}!`);
        }
    });

    client.on('message', async (channel, tags, message, self) => {
        logger.log(`@${tags.username} says: ${message}`);

        if (self) return;

        // Chat commands:
        // these should start with a ? to avoid confusion with technical commands

        if (message.toLowerCase() === '?help') {
            await client.say(channel, `${help()}`);
        }

        if (message.toLowerCase() === '?bearjoke') {
            const joke = getBearJoke();

            await client.say(channel, joke.question);

            setTimeout(() => {
                client.say(channel, joke.answer);
            }, 3000);
        }

        if (message.toLowerCase() === '?socials') {
            await client.say(channel, `See my twitter, bandcamp, and more: https://linktr.ee/duke_ferdinand`);
        }

        // More technical commands:
        // these should start with a > to avoid confusion with chat commands

        if (message.toLowerCase() === '>servertime') {
            await client.say(channel, `The server time is ${new Date().toLocaleTimeString()}`);
        }

        if (message.toLowerCase() === '>whoami') {
            await client.say(channel, `You are ${tags.username}, your user id is ${tags['user-id']}`);
        }

        if (message.toLowerCase().startsWith('hey bearbot') || message.includes(client.getUsername())) {
            let query = message.replace('hey bearbot', '').trim();

            if (query.length === 0) {
                await client.say(channel, 'Usage: >heybearbot <your question for bearbot>');
                return;
            }

            query = `
            User: ${tags.username}
            Moderator: ${tags.mod}
            ---
            ${query}
            `

            const response = await heyBearbot(query);

            await client.say(channel, `${response}`);
        }
    })

    // Join channel(s):
    // ----------------

    await client.join('Duke_Ferdinand');

}

main().catch((error) => {
    logger.error(`${bearEmoji} Error starting bear bot: ${error}`);
    process.exit(1);
});
