function solution(people, limit) {
let sortedPeople = people.sort((a,b)=>b-a)

let answer = 0;

for(i=0, j=people.length-1; i<=j; i++){
    if(sortedPeople[i]+sortedPeople[j] <= limit){
        j--
    }
      answer++
}
return answer
}