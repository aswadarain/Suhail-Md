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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923419159670";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_29_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc0LFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTFlOSTRnbjV2cEczakJNM0lqL0wzVjZJVGRIczVZUDJwRXhoUXdGcE81RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTkxNTk2NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc2MUNCQUEzM0U1QjhBOEFBNTQwNUJGMDA3NDNCRTY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg5NDU2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQxOTE1OTY3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDgwNDQxRjI4QUY2MkNGQjI4RTFFNzJDN0M1N0U2MjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODk0NTY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZyczl3UlZGUmUySkxzZ0xhTkM3d0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDMzNzY5NmUtZDVkMS00YWRjLWI0ZDMtMzQ5ZjFkODgwMTAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMjAzLFxuICAgICAgMixcbiAgICAgIDE0NyxcbiAgICAgIDk3LFxuICAgICAgMTYxLFxuICAgICAgMjEwLFxuICAgICAgMTIyLFxuICAgICAgNixcbiAgICAgIDEzNixcbiAgICAgIDIxNCxcbiAgICAgIDk5LFxuICAgICAgODcsXG4gICAgICA2LFxuICAgICAgMTIyLFxuICAgICAgMTM2LFxuICAgICAgMTQ4LFxuICAgICAgMTUxLFxuICAgICAgMTc5LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDEyMyxcbiAgICAgIDExLFxuICAgICAgMTgxLFxuICAgICAgMTMyLFxuICAgICAgMTE5LFxuICAgICAgMjM5LFxuICAgICAgMTgwLFxuICAgICAgMjgsXG4gICAgICAzNCxcbiAgICAgIDE2NSxcbiAgICAgIDI0NSxcbiAgICAgIDY2LFxuICAgICAgMjI3LFxuICAgICAgMjU0LFxuICAgICAgNixcbiAgICAgIDI0LFxuICAgICAgMTY0LFxuICAgICAgMTYzLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk2UjFUOFY0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTkxNTk2NzA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczNjUwNTg1NzY3OTM4OjE5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKVsOKBkMyk4pWv8J2RtPCdkbzwnZGv8J2RqPCdkbTwnZG08J2RqPCdkasg8J2RqPCdkbrwnZG+8J2RqPCdkavilbDigZDMpOKVr1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHem9zRUdFSjJFanJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibXhVeUx6T2lhY1lhNE1EaHNVSTNhNUQ5R3hZZTNxODNZalZuaG9Hd2pTbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuS2l1REJNSjgraE01NkdtUHk3SUt3N2NQUUNIRkhWb3ovZ0Nlamo0TEVhb2R2VjVWY0YrN3BXY01lbFhhdkppRklHU0k1UTdoTXNHMXZaUFBRcjlCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlK0xBOHIrTkhjUDBVeXVzYjVkTkRpUEoydzN5ZWRSUGl4US9qMmhHZjdsMThyRzhYS1lSK2VkN0hlTTQ1bGNPRXFvYm5ZK1Q3cnJPWjUxSnoyZzdEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTkxNTk2NzA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODk0NTYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzRHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmZGQ2cStVV0Z1WlhZYVlZOVNsK0kxVFMrU1RlYU9XQkFLWTJSK3E2QUhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDc0OTEyMTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTg1MDg1MTM3M1wifSIKfQ=="  // PUT your SESSION_ID 


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
