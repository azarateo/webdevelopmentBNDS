let fs = require('fs');

const PI = 3.1416
function sum(a,b){
    return a+b
}
const sub = (a,b)=>a-b

//exports =  { sub, sum, PI }
module.exports =  { sub, sum, PI }