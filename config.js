const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_22_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJzLzFJblhmZTBFeUpoTDdhYm5ialV1UCtBSnowb0lTZ3Nwc2xBaXBOV009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlozVURma1dLUkkyQ25COHlPWTYtYUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGU2NWQyNTYtYWVlOS00Mzk0LWE5MjEtMDU5ZjNmZWZkMGY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDQ0LFxuICAgICAgMTQ3LFxuICAgICAgMTA5LFxuICAgICAgODAsXG4gICAgICAxMjYsXG4gICAgICAxNSxcbiAgICAgIDIyNyxcbiAgICAgIDI1MCxcbiAgICAgIDc0LFxuICAgICAgNjUsXG4gICAgICA3NyxcbiAgICAgIDI3LFxuICAgICAgMTk1LFxuICAgICAgMzAsXG4gICAgICAxNTYsXG4gICAgICAxMjksXG4gICAgICAxMTIsXG4gICAgICAxNDgsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMTY0LFxuICAgICAgMTE1LFxuICAgICAgNjgsXG4gICAgICAxNDAsXG4gICAgICAxMTIsXG4gICAgICAxODksXG4gICAgICAxOTcsXG4gICAgICAxOCxcbiAgICAgIDE1MyxcbiAgICAgIDIwNyxcbiAgICAgIDUzLFxuICAgICAgMTc5LFxuICAgICAgMTg1LFxuICAgICAgMTkzLFxuICAgICAgMTg4LFxuICAgICAgNDgsXG4gICAgICA1LFxuICAgICAgMjE0LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVlWRUhQNjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NjQ0MzYwNDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5KXCIsXG4gICAgXCJsaWRcIjogXCIxNzc2NDAxODI5NjAzMzM6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2JlbjZzRUVKZmtnN1VHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5bWhEaEdNQzJwZ0dLcVFOWkFYa0JiZmFkbTdBZGRTd1NVbmdOTXZUZXk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZVanJJOEJhK1RXWmg5bE8rMVJhbnBIRUc4K1cvWk9OOFdzT29xYzlud0RLd3hKUWJ5eER1YTFWRHZjUVJlbENNend3emtCaGF5MzEvVXVRbk14NUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlPTWV4VnRTVlJoUVkxRjJUU2FJUWgzTFBpUTZMcnBNK2lwZ2FsYk05Q2xWRktQUXREQmNlN2huWjJvWldGQ3YxV1pBbTR1QlVlV3JmeUtvNHh1cER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NjQ0MzYwNDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODIzNzcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFcvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
