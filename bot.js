const TelegramBot = require('node-telegram-bot-api');
const { BOT_TOKEN, ADMIN_CHANNEL_ID } = require('./config');

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const { caption, photo } = msg;

    if (!caption && !photo) {
        return bot.sendMessage(chatId, 'Пожалуйста, отправьте описание и изображение ряженого бойца');
    }

    const adminMessage = `🚀 **Новая наводка**\nТекст: ${caption || ''}\nОт @${msg.from.username}`;

    if (photo) {
        const fileId = photo[photo.length - 1].file_id;
        await bot.sendPhoto(ADMIN_CHANNEL_ID, fileId, { caption: adminMessage });
    } else {
        await bot.sendMessage(ADMIN_CHANNEL_ID, adminMessage);
    }

    bot.sendMessage(chatId, 'Ваш контент отправлен на модерацию!');
});