function solution(number, limit, power) {
// 런타임 오류
//     const result = []
// for(i=1; i<=number; i++){
//     let factors = 0
//     for(j = 1; j<=i; j++){
//         if(i%j===0){
//             factors++
//         }
//     }result.push(factors)
// }

    const divisorsCount = new Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisorsCount[j]++;
        }
    }
    
        const offensePower =divisorsCount.slice(1).map((a)=>{
        if(a>limit){
            return power
        }else return a
    })
    return offensePower.reduce((a,b)=>a+b)
}