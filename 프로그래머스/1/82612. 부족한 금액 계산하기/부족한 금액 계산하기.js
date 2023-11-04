function solution(price, money, count) {
allPrices = 0;
    n = 1;
    while(n!==count+1){
        allPrices += price*n;
        n += 1;
    }
return allPrices-money > 0 ? allPrices-money : 0 
}