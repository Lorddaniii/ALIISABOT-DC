let handler = async (m, { conn, usedPrefix, command, args }) => {
let bot = conn.user.jid
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝚄𝚂𝙰𝙽𝙳𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command}*`
await conn.updateProfilePicture(bot, img)
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙲𝙰𝙼𝙱𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴 𝙿𝙴𝚁𝙵𝙸𝙻 𝙳𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
} else if (/^https?:\/\/\S+$/i.test(args[0] || '')) {
 await conn.updateProfilePicture(bot, { url: args[0] })
 conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙲𝙰𝙼𝙱𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴 𝙿𝙴𝚁𝙵𝙸𝙻 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
} else throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽, 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝙴𝙽𝚅𝙸𝙰 𝚄𝙽 𝙻𝙸𝙽𝙺 𝙳𝙸𝚁𝙴𝙲𝚃𝙾 𝙲𝙾𝙽 ${usedPrefix + command}*`}
handler.command = /^setppbot$/i
handler.rowner = true
export default handler 
