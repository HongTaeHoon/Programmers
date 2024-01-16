function solution(myString, pat) {
    aaa=myString.toLowerCase()
    bbb=pat.toLowerCase()
    return aaa.includes(bbb) ? 1 : 0
}