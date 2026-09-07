import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗] ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏs ʜᴀ sɪᴅᴏ ʙᴀɴᴇᴀᴅᴏs sɪ ᴅᴇsᴇᴀ ᴀᴄᴛɪᴠᴀʀʟᴏs ᴛɪᴇɴᴇ ǫᴜᴇ sᴇʀ ᴜɴ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ /ᴇɴᴀʙʟᴇ ᴍᴏᴅᴏʜᴏʀɴʏ*'
let fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "51951939243@g.us" } : {})},message: {"videoMessage": { "title":`©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `ALISABOT-DC`, 'jpegThumbnail': false }}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`)
let jsons = await json.json()
let res = jsons.result
conn.sendButton(m.chat, `- 𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘 𝚊 𝚃𝚒𝚔𝚃𝚘𝚔 𝙶𝚘𝚕𝚍🥵 -`, `*◈•@${who.split("@s.whatsapp.net")[0]}*`, res, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], fgif, { mentions: [who] })}
handler.command = /^(tiktokxxx)$/i
export default handler
global.mkbot = ['UfN5DLvV', 'lwSUluWz', 'KcrY8r8I', 'HSxJ72Rf', 'Gmc5DlDb', 'H6pvVPJc', 'uVAf54xz', 'wF4gTpTZ', 'nwJVzP6v']
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())]
