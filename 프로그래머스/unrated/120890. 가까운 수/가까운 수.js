function solution(array, n) {

    array.sort((a,b)=>a-b)
    arr = array.map((v)=>Math.abs(v-n))
    min = Math.min(...arr)
    minIdx = arr.indexOf(min)
    return array[minIdx]
}