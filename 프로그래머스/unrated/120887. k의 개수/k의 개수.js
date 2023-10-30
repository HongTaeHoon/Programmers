function solution(i, j, k) {
    arr=[]
for(n = i; n<=j; n++){
    if(n.toString().includes(k)){
        arr.push(n)
    }
}
    return [...arr.join('')].filter((a)=>a===k.toString()).length
}