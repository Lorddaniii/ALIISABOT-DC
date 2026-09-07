let handler = async (m, { conn, command }) => {
    let url = global.alisabotImages[Math.floor(Math.random() * global.alisabotImages.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ ALISABOT-DC`.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
}
handler.command = /^alisabot$/i
handler.tags = ['anime']
handler.help = ['alisabot']
export default handler

global.alisabotImages = [
    "https://i.imgur.com/txizG0t.jpg",
    "https://i.imgur.com/awonAdj.jpeg",
    "https://i.imgur.com/OeVTqyT.jpeg",
    "https://i.imgur.com/GizvVDj.jpeg",
    "https://i.imgur.com/SXA3AqC.jpeg",
    "https://i.imgur.com/bduq3cT.jpeg",
    "https://i.imgur.com/hNt6sBh.jpeg",
    "https://i.imgur.com/Zj4lqTO.jpeg"
]
