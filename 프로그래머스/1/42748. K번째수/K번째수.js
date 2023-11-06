function solution(array, commands) {
    answer = []
 for(i=0; i < commands.length; i++){
     let n  = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1]
     answer.push(n)
 }

    return answer
}