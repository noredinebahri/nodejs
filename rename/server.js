const http = require('http')
const fs = require('fs')
var oldpath = "file2.html" 
var newpath = "file3.html" 
var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
    fs.rename(oldpath,newpath,(err)=>{
        if(err) throw err
        console.log('the file was renamed')
    })
})
console.log('Connected')
server.listen(1988)