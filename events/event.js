const events = require('events')
const util = require('util')

var Personnages = function(nom){
    this.nom = nom
}

util.inherits(Personnages,events.EventEmitter)
var Antigone = new Personnages('Antigone')
var Ismene = new Personnages('Ismène')
var Creon = new Personnages('Créon')
var TableOfName = [Antigone,Ismene,Creon]
TableOfName.forEach((thisName)=>{
    thisName.on('name',(msg)=>{
        console.log(thisName.nom+' parle de : '+msg)
    })
})
Creon.emit('name','je suis un petit garçon')
