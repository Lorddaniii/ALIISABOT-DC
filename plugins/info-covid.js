import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽 𝙿𝙰𝙸𝚂, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'País?'
if (json.confirmed) m.reply(`
╭─────°.♡.°‧─────
│ALISABOT-DC
│🌏 País : ${text}
│✅Confirmado : ${json.confirmed.value}
│📉curado : ${json.recovered.value}
│☠️Muertes : ${json.deaths.value}
│💌Info Actualizada : ${json.lastUpdate}
╰─────°.♡.°‧─────`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <país>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler
