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
global.packname = '๐๐ฏอฅ๐๐๐ฒ๐ฬ๐๐๐๐๐ป๐๐อฃ๐อซ๐ด\nโIl buon chupitaso รฉ il fondamento della vera felicitรก...\nโ ๐๐ฌ ๐๐ฅ ๐๐๐ฆ๐ข๐ง๐จ\nโ ๏ธ๐ป๐๐อฃ๐อซโ ๏ธ\nโ ๏น๏น๐บ๏น๏น๏น๐ป๏น๏น โ \nโญโโโผโฅ๐ธ๐พแทค๐พอฃ๊ฏญ๐พ๊ฏญ๐พอซ๐ฝอง๐นโโพโโโฎ\nโฝ โโโโโโโโโโโโ โ\nโ โ ๐ฅ๐ป๐๐อฃ๐อซ๐\nโ โโโโโโโโโโโโค โ\nโ โโจfede แง marko \nโ โโโโโโโโโโโโค โ\nโ โ    โฅ๏ธ๐ข ๐ ๐โฅ๏ธ\nโฟ โโโโโโโโโโโโ โฟ\nโฐโโจโ๐ฎ๐๐๐๐๐๐๐๐พ๐ฎโ โ โโฏ '
global.author = 'โฌ๐ค๏ธ๐๐ป๐๐อฃ๐อซ๐๐ค๏ธ\nโณ  ๐ฅFede & Marko๐ฅ\n\n\n\n\n     ๐ฅแตbอคแถฐiแถปtอฅแถฐchอฃeองแถ s๐\n๐ธDi buona volontร  sta pieno lโinferno. โจ\n\n\n\n\n\n๐ฆSe non troviamo acqua potabile, presto ci sarร  fretta๐ฆ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

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
