function solution(arr, idx) {
    aaa=arr.slice(idx).findIndex((i)=>i===1)
    return (aaa >= 0 ? aaa + idx : -1)
}