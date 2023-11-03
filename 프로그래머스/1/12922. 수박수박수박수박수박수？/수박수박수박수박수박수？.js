function solution(n) {
    answer = []
    while( n !== 0){
        answer.push('수')
        n = n-1
    }
return answer.map((v,idx)=>{if(idx%2!==0){return '박'}else return v}).join('')
}