function solution(d, budget) {
d.sort((a,b)=>a-b);
let answer = 0;
let sum = 0;
for(i=0; i <d.length; i++){
        answer++
        sum +=d[i]
        if(sum>budget){
            answer--
        }
    }
    return answer
}