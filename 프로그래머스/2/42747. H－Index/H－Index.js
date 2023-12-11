function solution(citations) {
    let answer = 0;
    let arr = []
    citations.sort((a,b)=>b-a)
    for(i=0; i<citations.length; i++){
        arr.push(citations[i])
        if(citations[i] < i+1){
            break;
        }
        answer++

    }
return answer
}