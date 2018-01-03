const http = require('http')
const fs = require('fs')
var pathWrite = "filetoupdatebywritefile.txt" 

var dataArabic ="السلام" 
var dataEnglish ="\n Hello" 

var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
// fs.appendFile(pathappend,'سلام in English : '+dataEnglish,(err)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log('saved')
//     }
// })
fs.writeFile(pathWrite,'hello',{flag:'w'},(err,data)=>{
    if(err){
                console.log(err.message)
            }else{
                consolecd.console.log('saved')
            }
})
})
console.log('Connected')
server.listen(1988)