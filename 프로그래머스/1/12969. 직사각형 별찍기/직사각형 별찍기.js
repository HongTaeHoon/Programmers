process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a);
    // console.log(b);
   
    for(i=0; i<b; i++){
         let star = ''
        for(j=0; j<a; j++){
            star += '*'
        }
            console.log(star)
    }

});