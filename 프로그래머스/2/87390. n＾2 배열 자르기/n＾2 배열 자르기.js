function solution(n, left, right) {
let arr = Array(right-left+1).fill(0)
return arr.map((a,idx)=> Math.max((idx+left)%n+1,Math.ceil((idx+1+left)/n)))

}




                    