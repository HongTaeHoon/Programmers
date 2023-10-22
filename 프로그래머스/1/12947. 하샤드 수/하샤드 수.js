function solution(x) {
    let n = 0
    for(i=0;i<x.toString().length;i++){
        n+=Number(x.toString()[i])
    }
return x%n === 0 
}