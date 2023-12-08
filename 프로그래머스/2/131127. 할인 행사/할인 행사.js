function solution(want, number, discount) {
    let answer = 0
    let list = want.map((a,idx)=>Array(number[idx]).fill(a)).flat();
    for(i=0; i<=discount.length-10; i++){
   let discountPackage = discount.slice(i,i+10)
   if(discountPackage.sort().toString()===list.sort().toString()){
       answer++
   }
   }
    return answer
}