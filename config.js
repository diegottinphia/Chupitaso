global.owner = ['12029844612'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = '🐊𝕯ͥ𝖎𝖊𝕲𝖔̈𝖙𝖙𝖎𝖓𝕻𝖍𝖎ͣ𝖆ͫ🌴\n❏Il buon chupitaso é il fondamento della vera felicitá...\n❏ 𝐄𝐬 𝐞𝐥 𝐜𝐚𝐦𝐢𝐧𝐨\n⚠️𝕻𝖍𝖎ͣ𝖆ͫ⚠️\n┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ \n╭──╼┥𝈸𖾗ᷤ𖾕꯭ͣ𖾔꯭𖾔ͫ𖽙ͧ𝈹┝╾──╮\n╽ ┌──────────┐ ┃\n┃ │ 🔥𝕻𝖍𝖎ͣ𝖆ͫ💀\n┃ ├──────────┤ ┃\n┃ │✨fede ყ marko \n┃ ├──────────┤ ┃\n┃ │    ♥️𝓢 𝔂 𝓟♥️\n╿ └──────────┘ ╿\n╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯ '
global.author = '➬🌤️🏆𝕻𝖍𝖎ͣ𝖆ͫ🏆🌤️\n↳  🔥Fede & Marko🥀\n\n\n\n\n     🔥ᵇbͤᶰiᶻtͥᶰchͣeͧᶠs💀\n😸Di buona volontà sta pieno l’inferno. ✨\n\n\n\n\n\n💦Se non troviamo acqua potabile, presto ci sarà fretta💦\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
