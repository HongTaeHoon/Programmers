function solution(myString, pat) {
    return Array.from(myString).map(a=> a==='A'?'B':'A').join('').includes(pat) ? 1 : 0
}