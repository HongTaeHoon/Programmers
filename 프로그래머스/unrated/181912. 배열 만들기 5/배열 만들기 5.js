function solution(intStrs, k, s, l) {
    arr = []
    for(i=0; i<intStrs.length; i++){
        if(intStrs[i].split('').slice(s,s+l).join('') > k){
            arr.push(Number(intStrs[i].split('').slice(s,s+l).join('')))
        }
}return arr
}