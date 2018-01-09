var fs = require('fs')
var i = 0
var myReadStream = fs.createReadStream(__dirname+'/read.txt','utf8')
var myWritreStream = fs.createWriteStream(__dirname+'/write.txt')
myReadStream.on('data',(chunk)=>{
    console.log('data received ______'+i++)
    myWritreStream.write(chunk)
})

