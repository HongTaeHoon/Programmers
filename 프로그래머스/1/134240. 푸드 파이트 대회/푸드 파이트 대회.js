function solution(food) {
    answer = []
    count = food.slice(1).map((a)=>Math.floor(a/2))
    for(i=0; i<count.length; i++){
        answer.push(String(i+1).repeat(count[i]))
    }
    return [...answer].join('')+'0'+[...answer].reverse().join('')

}