const fs = require('fs')

global.creator = 'Agus_Gunawan'// yourname
global.MONGO_DB_URI = "https://cloud.mongodb.com/v2#/org/64ad2e175a555f386d7479cc" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "-@smapgrirumpin123" //isi apa aja bebas
global.your_email = "agusgunawan70@guru.sma.belajar.id" //email
global.email_password = "numyzywjqyjzzwmf" //application password email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
