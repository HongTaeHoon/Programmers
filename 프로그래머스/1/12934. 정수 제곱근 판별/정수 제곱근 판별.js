function solution(n) {
const x = Math.sqrt(n)
 return   n % x === 0 ?  (x+1) * (x+1) :  -1
}