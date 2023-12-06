function solution(arr) {
let answer = []
const gcd = (x, y) => x % y === 0 ? y : gcd(y,x%y);
while(arr.length !== 1){
    answer.push(arr[0]*arr[1]/gcd(arr[0],arr[1]))
    arr.splice(0,2,arr[0]*arr[1]/gcd(arr[0],arr[1]))
}
return arr[0]
}