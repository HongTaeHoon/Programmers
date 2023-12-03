function solution(n) {
    let aaa=[];
    aaa.push(n);
    while(n !== 1){
        n % 2 === 0 ? n = n/2 : n = 3 * n + 1
        aaa.push(n);
    } 
  return aaa
    
    
}