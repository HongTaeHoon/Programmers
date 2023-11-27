function solution(n) {
    for(let i = n+1 ; i< 1000000; i++){
        if(n.toString(2).replace(/0/gi,'').length === i.toString(2).replace(/0/gi,'').length){
            return i
        }
    }
}