function solution(myStr) {
return myStr.match(/[^a-c]+/g) === null ? ['EMPTY'] : myStr.match(/[^a-c]+/g)
}