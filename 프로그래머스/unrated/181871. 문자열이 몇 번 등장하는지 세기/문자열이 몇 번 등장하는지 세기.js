function solution(myString, pat) {
    arr = []
for(i=0; i<=myString.length; i++){
    arr.push(myString.slice(i,i+pat.length))}
return arr.filter((a)=>a===pat).length
    
}

             