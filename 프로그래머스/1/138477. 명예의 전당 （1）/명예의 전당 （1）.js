function solution(k, score) {
    var answer = [];
let hall = [];
let day = 0;
for(i=0; i<score.length; i++){
    hall.push(score[i])
    hall.sort((a,b)=>b-a)
    answer.push(hall.slice(0,k).at(-1))
}
return answer
}