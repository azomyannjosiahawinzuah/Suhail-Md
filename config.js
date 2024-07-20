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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_48_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NixcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICA0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhFNzQ3Tm53V0ZTOW5YaE5BZGxyRndxVEZ4bVp0Y0hkRUJCYkFOcWdGMFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhWQnV5QjQxVE1TWlhfOUJUUndyOEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjFhMDc4OTAtOTBiNi00Yzk4LWI5ZTctZGYyZGEyZWEyNTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgODMsXG4gICAgICA4NCxcbiAgICAgIDQyLFxuICAgICAgODYsXG4gICAgICAxNzcsXG4gICAgICAxNDEsXG4gICAgICAxNDQsXG4gICAgICAyNDYsXG4gICAgICAxNjMsXG4gICAgICAxNCxcbiAgICAgIDE2NSxcbiAgICAgIDkyLFxuICAgICAgMTg4LFxuICAgICAgMjQyLFxuICAgICAgMzAsXG4gICAgICAxNjksXG4gICAgICAxNjksXG4gICAgICAxODcsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDU2LFxuICAgICAgMjEwLFxuICAgICAgNTksXG4gICAgICAzMCxcbiAgICAgIDQ5LFxuICAgICAgMTE2LFxuICAgICAgNzEsXG4gICAgICAyMDMsXG4gICAgICAzMCxcbiAgICAgIDE5MyxcbiAgICAgIDEwMixcbiAgICAgIDE2NyxcbiAgICAgIDEzNixcbiAgICAgIDU4LFxuICAgICAgMjI2LFxuICAgICAgMTk2LFxuICAgICAgMzksXG4gICAgICAxNTcsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSzc2QkoxSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ2NDQzNjA0OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTkpcIixcbiAgICBcImxpZFwiOiBcIjE3NzY0MDE4Mjk2MDMzMzo0NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYmVuNnNFRUxyOThMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjltaERoR01DMnBnR0txUU5aQVhrQmJmYWRtN0FkZFN3U1VuZ05NdlRleTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUxlWk5IZDlSMDg1eEgxb2krdDVnWXlNbTltL2VGNmtFb1BydnZGSWxMcGV5RDJ0RThzU1lBWDB4TVpHdFJYU3dqb1c4YVdrR1pySmszZnpvL1BrQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS2thTjMrZWgwNnNBRTJoN3dVbXNyRWZYNW9BZHBjMHZDSVltd21LbHlMZXpCRStGY05IVW5XejBJR3UwckV5a3dSL1ZjODVpbzU4MG92WUNDay9XZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ2NDQzNjA0OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MTU3MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEVytcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURXKy5qc29uIjogIntcImtleURhdGFcIjpcIlRxQ1pvV0lMN0M2dUNKMmNsQm5hSW0wSTkxSDhFWk45MW9uTVdXRzFwODQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NDQzOTMzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTg1NzEyNzk5XCJ9Igp9"  // PUT your SESSION_ID 


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
