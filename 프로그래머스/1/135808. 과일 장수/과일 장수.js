function solution(k, m, score) {
if(score.length < m) return 0
const sortedApple = score.sort((a,b)=>b-a)
// let price = []
arr = []
//     while(score.length >= m){
//         price += m*sortedApple.splice(0,m)[m-1]
        
//     }
//     console.log(price)
    for(i = 0; i<score.length; i+=m){
        if(sortedApple.slice(i,m+i).length === m)arr.push(sortedApple.slice(i,m+i))
    }
    const price = arr.map((a)=>a.pop()*m)
    return price.reduce((a,b)=>a+b)
    
}