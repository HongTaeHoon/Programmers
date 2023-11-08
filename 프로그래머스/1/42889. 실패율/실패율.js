function solution(N, stages) {

    const answer = [];
    let people = stages.length;
    for(let i = 1; i <= N+1; i++){
        let notClear = stages.filter((a)=>a === i).length
        answer.push([i,notClear/people])
        people -= notClear
    }
    answer.pop()
answer.sort((a,b)=>b[1]-a[1])
   return  answer.map((a)=>a[0])


}