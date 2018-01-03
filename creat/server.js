const http = require('http')
const fs = require('fs')
var path = "filetocreate.txt" 
var path2 = "filetocreatebyappended.txt" 
var path3 = "filetocreatebyOpen.txt" 
var dataArabic ="\n السلام" 
var dataEnglish ="\n Hello" 

var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
// fs.writeFile(path,data,'utf8',(err)=>{
//     if(err) throw err
//     console.log('the data was created')
//     res.write('data was created ')
//     res.end()
// })
// fs.appendFile(path2,dataEnglish,'utf8',(err)=>{
//     if(err) throw err
//     res.write('the file was created and data was appended')
//     res.end()
// })
fs.open(path3, 'a',(err,fd)=>{
    if(err) throw err
    console.log(fd)
})
})
console.log('Connected')
server.listen(1988)