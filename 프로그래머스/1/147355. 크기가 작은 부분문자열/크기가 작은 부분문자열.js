function solution(t, p) {
    arr = []
    for(i=0; i<t.length-p.length+1; i++){
        arr.push(t.slice(i,i+p.length))
    }
return arr.filter((a)=> a<= p).length
}