function solution(s) {
    const arr = s.split(' ')
const result = `${arr.sort((a,b)=>a-b)[0]} ${arr.sort((a,b)=>a-b)[arr.length-1]}`
    return result
}