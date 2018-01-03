const http = require('http')
const fs = require('fs')
var path = "filetoread.html" 

var server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
    fs.readFile(path,'utf8',(err,data)=>{
        if(err) throw err
        res.write(data)
        res.end()
    })
})
console.log('Connected')
server.listen(1988)