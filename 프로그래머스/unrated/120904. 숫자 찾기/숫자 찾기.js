function solution(num, k) {
    const arr = Array.from(num.toString())
    if(arr.findIndex((a)=> a===k.toString()) >= 0){
        return arr.findIndex((a)=> a===k.toString())+1
    }else return -1
}