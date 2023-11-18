const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    aaa=Number(input[0])
    bbb=Number(input[1])
    ccc = (aaa+bbb)
    console.log(aaa + " + " + bbb +  " = " + ccc);
});