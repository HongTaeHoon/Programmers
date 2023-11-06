function solution(a, b, n) {
let x = 0
while (n >= a){
   x += Math.floor(n/a)*b
    n = Math.floor(n/a)*b + n%a
}
    return x
}