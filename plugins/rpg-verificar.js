import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `🌴𝙷𝙾𝙻𝙰 𝚈𝙰 𝚃𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰𝚂🍃 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁☘️ 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙿𝙰𝚁𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚃𝙴 𝙾𝚃𝚁𝙰 𝚅𝙴𝚉 𝚄𝚂𝙰𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾🌱\n/unreg <Número de serie>`
  if (!Reg.test(text)) throw `🌹𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙷𝙰𝚂 ❌𝙵𝙰𝙻𝙻𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚈𝙰 𝚃𝙴 𝙻𝙾 𝙷𝙰𝚂 𝙷𝙴𝙲𝙷𝙾 𝙴𝙽 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴✨𝚃𝙴 𝙳𝙾𝚈 𝚄𝙽 ☘️𝙴𝙹𝙴𝙼𝙿𝙻𝙾\n  /Reg OFCFRANKLIN .21`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🍃𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲Í𝙾 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴🍃'
  if (!age) throw '☘️𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙾 𝚃𝚄 𝙴𝙳𝙰𝙳 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁𝚃𝙴 𝚃𝚄 𝙴𝙳𝙰𝙳🌱'
  if (name.length >= 30) throw '☘️𝙷𝙾𝙻𝙰 😊𝙾𝚈𝙴 𝙿𝚄𝙴𝙳𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙼Á𝚂 𝙲𝙾𝚁𝚃𝙾🌴𝚈𝙰 𝚀𝚄𝙴 𝙴𝙻 𝚀𝚄𝙴 𝙴𝚂𝚃Á𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙾 𝙼Á𝚂 𝙲𝙾𝚁𝚃𝙾🌹️' 
  age = parseInt(age)
  if (age > 100) throw '✨𝙷𝙾𝙻𝙰 😅𝙾𝚈𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 ☘️𝙿𝚄𝙴𝙳𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚃𝚄 𝙴𝙳𝙰𝙳 𝙼Á𝚂 𝙱𝙰𝙹𝙰 𝙾 𝙰𝙲𝙰𝚂𝙾 𝙴𝚁𝙴𝚂 𝚄𝙽 𝙰𝙽𝙲𝙸𝙰𝙽𝙾🤭?'
  if (age < 5) throw '😒𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝙰𝙼𝙾𝚂 𝙽𝙾 𝙴𝚂𝚃𝙴𝙽 𝙹𝚄𝙶𝙰𝙽𝙳𝙾🤨 𝙲𝙾𝙼𝙾 𝚄𝙽𝙾 𝙽𝙸𝙽𝙾 𝙳𝙴 𝙲𝙸𝙽𝙲𝙾 𝙰𝙽𝙾𝚂 𝚅𝙰 𝙰 𝙿𝙾𝙳𝙴𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁😅'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌「ALISABOT-DC」─
├❏[🌴]𝙷𝙾𝙻𝙰 𝚈𝙰 𝙴𝚂𝚃Á𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 
├❏[🤴]𝙽𝙾𝙼𝙱𝚁𝙴 ${name}
├❏[🏧]𝙴𝙳𝙰𝙳 ${age} 𝙰Ñ𝙾𝚂 
├❏[™️]𝙽Ú𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴
├❏[✔️]${sn}
└────ׂ─ׂ─ׂ─ׂ───
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(Reg|reg|registrar|reg(ister)?)$/i

export default handler
