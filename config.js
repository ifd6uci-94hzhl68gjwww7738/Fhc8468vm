// config.js - ESM Version
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://alirazamir39_db_user:I0R2yH7HiK1gtxPz@cluster0.qkyfaen.mongodb.net/',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'fatimamd',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status messages
    MENTION_REPLY: 'true',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '12.0.0 Pʀᴇᴍɪᴜᴍ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_STATUS: 'warn',
    ANTIEDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: '➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡',
    ANTI_LINK: 'true',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '╔═════════════════════════╗\n║  ⚡ *➟꯭💀𝜜𝐿𝛪 𝑿 𝛭𝐷🐍⎯꯭᪳ᥫ᭡  ᴀᴄᴛɪᴠᴀᴛᴇᴅ* ⚡ \n╚═════════════════════════╝\n\n👋 Welcome @user to the matrix!\n\n> 🚀 *Type* `.menu` *for system commands*\n> 💎 *Status: Secure & Online*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡*',
    GOODBYE_MESSAGE: '╔═════════════════════════╗\n║  ⚠️ *ᴜꜱᴇʀ ᴅɪꜱᴄᴏɴɴᴇᴄᴛᴇᴅ* ⚠️ \n╚═════════════════════════╝\n\n👋 Goodbye @user!\n\n> 🥀 *Session terminated from the group.*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*[ 📵 ꜱᴇᴄᴜʀɪᴛʏ ᴀʟᴇʀᴛ ] Call Rejected Automatically!*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
    REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
    LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like status
    
    // Bot Identity
    BOT_NAME: '➟꯭💀𝜜𝐿𝛪 𝑿 𝛭𝐷🐍⎯꯭᪳ᥫ᭡ ',
    OWNER_NAME: '*𓆩⤹𝜜𝐿𝛪  𝑅𝜟𝛧𝜜፝⤸𓆪💀*',
    OWNER_NUMBER: '923450073465',
    DEV: '923155641171',
    IK_IMAGE_PATH: './lib/fatimamds.jpg',
    BOT_IMAGE: 'https://i.ibb.co/WvmT2Q05/MAFIA-ADEEL.jpg',
    
    // Newsletter Configuration
    NEWSLETTER_JID: '120363412031212190@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',  
    
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbBru6h9hXFBPYUSiB0s',
    BANNED: [],
    SUDO: ["923450073465@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        // Status & View Settings
        AUTO_VIEW_STATUS: 'true',
        AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status (disabled by default)
        MENTION_REPLY: 'true',
        AUTO_STATUS_SEEN: 'true',
        READ_MESSAGE: 'false',
        
        // Auto Actions
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        
        // Anti Features
        ANTI_DELETE: 'false',
        ANTI_STATUS: 'warn',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTIEDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'warn',
        
        // Group Events
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        // Message Templates
        WELCOME_MESSAGE: '╔═════════════════════════╗\n║  ⚡ *➟꯭💀𝜜𝐿𝛪 𝑿 𝛭𝐷🐍⎯꯭᪳ᥫ᭡  ᴀᴄᴛɪᴠᴀᴛᴇᴅ* ⚡ \n╚═════════════════════════╝\n\n👋 Welcome @user to the matrix!\n\n> 🚀 *Type* `.menu` *for system commands*\n> 💎 *Status: Secure & Online*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡*',
        GOODBYE_MESSAGE: '╔═════════════════════════╗\n║  ⚠️ *ᴜꜱᴇʀ ᴅɪꜱᴄᴏɴɴᴇᴄᴛᴇᴅ* ⚠️ \n╚═════════════════════════╝\n\n👋 Goodbye @user!\n\n> 🥀 *Session terminated from the group.*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡*',
        REJECT_MSG: '*[ 📵 ꜱᴇᴄᴜʀɪᴛʏ ᴀʟᴇʀᴛ ] Call Rejected Automatically!*',
        
        // Bot Identity
        VERSION: '12.0.0 Pʀᴇᴍɪᴜᴍ',
        OWNER_NAME: '*𓆩⤹𝜜𝐿𝛪  𝑅𝜟𝛧𝜜፝⤸𓆪💀*',
        OWNER_NUMBER: '923450073465',
        DEV: '923450073465',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡*',
        STICKER_NAME: '➟꯭☠️ɑ͢ɭ፝֟ı֟፝• ᭄ɼ͠ɑ͢ʑɑ͢⎯꯭᪳ᥫ᭡',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: '➟꯭💀𝜜𝐿𝛪 𝑿 𝛭𝐷🐍⎯꯭᪳ᥫ᭡ ',
        BOT_IMAGE: 'https://i.ibb.co/WvmT2Q05/MAFIA-ADEEL.jpg',
        
        REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
        LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like
        
        // Lists
        BANNED: [],
        SUDO: ["923450073465@s.whatsapp.net"]
    }
};

export default config;
