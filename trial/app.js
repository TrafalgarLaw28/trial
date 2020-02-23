// t = 0;

// var timer = setInterval(function(){
//     t = t+2;
//     console.log(t+" seconds have passed");
//     if (t>5) 
//     {
//         clearInterval(timer);
//     }
// },2000);
// console.log("yooo");
// console.log(__dirname); 
// console.log(__filename);
// var stuff = require('./stuff');
var e = require('events');

// console.log(stuff.counter(['shaun','crystal','ryu']));
// console.log(stuff.adder(10,5));
// console.log(stuff.pi);

// var myEmitter = new e.EventEmitter();

// myEmitter.on('someEvent',function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent','the event was emitted');

var u = require('util');
var P = function(name){
    this.name = name;
};

u.inherits(P,e.EventEmitter);

var james = new P('james');
var mary = new P('mary');
var ryu = new P('ryu');
var people = [james,mary,ryu]

people.forEach(function(P){
    P.on('speak',function(msg){
        console.log(P.name+' says: '+msg);
    });
});
james.emit('speak','hey dudes');

