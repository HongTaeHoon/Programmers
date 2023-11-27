function solution(n) {
 let arr = [0,1]
 for(let i=1; i<n; i++){
     arr.push(arr[i]+arr[i-1]%1234567)
 }
    return arr[arr.length-1]%1234567
}