const http = require('http')
const fs = require('fs')
var pathtodelete1 = "file1.txt" 
var pathtodelete2 = "file2.txt" 
var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
fs.unlink(pathtodelete2,(err)=>{
    if(err) throw err
    console.log('the file was deleted')
})
})
console.log('Connected')
server.listen(1988)