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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923313759112";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_52_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExLFxuICAgICAgICA0OSxcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICA3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjd4MWxwK09HY0RtS29wUDAzTGR0NlpSRHpEWXFYMVZ5anFwQm5MNHBOa3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFIMllxMWYtVDhLcy11RFlvU0NFdXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzkyYjE4N2ItMzE0ZC00NGVkLWJlMTEtN2VlOGUxZTYxYTkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDE2OSxcbiAgICAgIDYwLFxuICAgICAgNjAsXG4gICAgICAyMTUsXG4gICAgICAxMTMsXG4gICAgICA0MSxcbiAgICAgIDE0MixcbiAgICAgIDI4LFxuICAgICAgMjI4LFxuICAgICAgMjA2LFxuICAgICAgMTQ0LFxuICAgICAgMjksXG4gICAgICAxNjQsXG4gICAgICAxMDgsXG4gICAgICAxMDIsXG4gICAgICA0MixcbiAgICAgIDEzMixcbiAgICAgIDQ5LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMjI0LFxuICAgICAgMjgsXG4gICAgICA1NCxcbiAgICAgIDg5LFxuICAgICAgMTc0LFxuICAgICAgNyxcbiAgICAgIDI5LFxuICAgICAgMTMwLFxuICAgICAgMjM4LFxuICAgICAgMjAwLFxuICAgICAgNDMsXG4gICAgICAxNDcsXG4gICAgICAxNzMsXG4gICAgICAyOSxcbiAgICAgIDc1LFxuICAgICAgMTAyLFxuICAgICAgMjI1LFxuICAgICAgMTI4LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlFHS1lSS0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3Nzc2OTc4ODoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMxMjU4NDcwNzcyODQ1OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3TG9aTUZFTm4vanJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidS9zZEhuTGRUQzlNcUxEV1p5UmFxWjhVRC9Zekw3ZWptZXlkNDdUTWluUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrenlNZm1vSXJRUHl5QngrdUk1aWxWLytoK08xNHJoVnRIbENMOEJoeUdjb1R2OTErb21mUTFhaXkrMlpkeDg4ai9ibmtoODRzWHdEbHl1U0g3elFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWMG9QSkd0VmZWVllLc3dJaVdOaFNLS3k5bndXMDZ3MEFJcmpkWjBPVzdpa1pzTnRuQUV1UEJ5R2F5dURZTnF1ZFFsaU9BNG5zd3JWSDVDWGxqd2VoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzc3Njk3ODg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTEwMzY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGFPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQYU8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJobjdISVpaZEJxYjB5aHZYalY5Myt3UjdjZW8zTFJpUHF2V0JNVjdDTlRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODI1NzM1MDEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5MTAyOTA4MjdcIn0iCn0="


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
