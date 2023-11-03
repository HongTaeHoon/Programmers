function solution(n) {
    answer = ''
    for(i = 1; i<=n; i++){
        if(i % 2 ){
            answer+='수'
        }else {
            answer+='박'
        }
    }
    return answer
}