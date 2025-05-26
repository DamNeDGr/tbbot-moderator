require('dotenv').config();


module.exports = {
    BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    ADMIN_CHANNEL_ID: process.env.ADMIN_CHANNEL_ID,
    PUBLIC_CHANNEL_ID: process.env.PUBLIC_CHANNEL_ID
};

