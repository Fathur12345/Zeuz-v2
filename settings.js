// ##ZEUS BOT MD V1 -SC ORI BY DGXEON DI RECODE OLEH B16_OFC-

//SC INI GRATIS TIDAK UNTUK DI JUAL MASIH MAKSA JUAL? MAKA NERAKA ADALAH TEMPAT YANG PANTAS UNTUK MU

// J͜͡A͜͡N͜͡G͜͡A͜͡N͜͡ L͜͡U͜͡P͜͡A͜͡ E͜͡D͜͡I͜͡T͜͡ O͜͡W͜͡N͜͡E͜͡R͜͡

const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6281260431003'] //ur owner number
global.ownernomer = "6281260431003" //ur owner number2
global.ownername = "Fathur" //ur owner name
global.ytname = "YT: B16_OFC" //ur yt chanel name
global.socialm = "GitHub: B16_Q28" //ur github or insta name
global.location = "Indonesia, Jawa Barat, Jakarta" //ur location

//new
global.botname = "Zeus Bot V1"
global.ownernumber = '6281260431003'
global.ownername = 'Fathur'
global.ownerNumber = ["6281260431003@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@B16_OFC"
global.websitex = "https://youtube.com/playlist?list=PLSvS3WbyjQEP13usaHesQtw_uwrJSd81a"
global.wagc = "https://chat.whatsapp.com/FRzTQyeFV5tIPhWim5Loig"
global.themeemoji = '🥀'
global.wm = "Zeus Bot Md V1"
global.botscript = 'https://youtube.com/playlist?list=PLSvS3WbyjQEP13usaHesQtw_uwrJSd81a' //script link
global.packname = "Sticker By"
global.author = "Zeus Bot\n\n\nA whatsapp bot by by\n🦄Fathur\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +6281260431003"
global.creator = "6281260431003@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./ZeusMedia/theme/thumbnail.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./ZeusMedia/theme/thumbnail.jpg") //ur logo pic
global.err4r = fs.readFileSync("./ZeusMedia/theme/thumbnail.jpg") //ur error pic
global.thumb = fs.readFileSync("./ZeusMedia/theme/thumbnail.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '_*DONE GA BG? DONE!*_',
    admin: '_*FITURNYA CUMA BISA BUAT ADMIN!_*',
    botAdmin: '_*JADIIN BOT ADMIN DULU!*_!',
    premime: '*_FITUR KHUSUS PENGGUNA PREMIUM!_*',
    owner: '*_FITUR CUMA BISA DI PAKE SAMA OWNER!_*',
    group: '*_FITUR KHUSUS GRUP!*_',
    private: '*_FITUR KHUSUS PRIVATE_*',
    bot: '*_FITUR KHUSUS PENGGUNA BOT!_*',
    wait: '*_SABARR..._*',
    linkm: '*_LINK NYA AJA KAGA ADA MANA BISA KOCAK_*',
    endLimit: '*_LIMIT MU SUDAH HABIS BIASANYA SETIAP JAM 12 BAKAL DI RESET_*',
    nsfw: '*_AKTIFIN DULU FITUR NSFW NYA!_*',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})