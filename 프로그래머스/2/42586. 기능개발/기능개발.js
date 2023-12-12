function solution(progresses, speeds) {

let functions = 1
let answer = []
let day = progresses.map((a,idx)=>Math.ceil((100-a)/speeds[idx]))
    for(i=0; i<day.length; i++){
        if(day[i] >= day[i+1]){
            day.splice(i+1,1)
            i--
            functions += 1
        }else {
            answer.push(functions)
            functions = 1
        }
    }
   return answer
}