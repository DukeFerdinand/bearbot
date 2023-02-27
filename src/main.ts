import {Client} from 'tmi.js'
import {config} from 'dotenv'

import {Logger} from './logger'

config()

const logger = new Logger('main-thread');

const bearEmoji = '🐻';

logger.log(`${bearEmoji} Starting bear bot...`);

async function main() {
    logger.log(`${bearEmoji} Bear bot started!`);

    const client = new Client({
        options: {debug: true},
        connection: {
            reconnect: true,
            secure: true,
        },
        identity: {
            username: 'abearygoodbot',
            password: `oauth:${process.env.TWITCH_ACCESS_TOKEN}`,
        }
    });

    await client.connect();

    await client.join('Duke_Ferdinand');

    client.once('join', (channel, username, self) => {
        if (self) {
            logger.log(`${bearEmoji} Joined ${channel}!`);
        }
    });

}

main().catch((error) => {
    logger.error(`${bearEmoji} Error starting bear bot: ${error}`);
    process.exit(1);
});
