function solution(arr, divisor) {
    arr2 = arr.filter((a,idx)=>a%divisor===0).sort((a,b)=>a-b)
    return arr2.length > 0 ? arr2 : [-1]
}