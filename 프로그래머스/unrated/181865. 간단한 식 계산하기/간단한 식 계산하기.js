function solution(binomial) {
console.log(binomial.split(' '))
    a = binomial.split(' ')[0];
    b = binomial.split(' ')[1];
    c = binomial.split(' ')[2];
    const cal = ()=>{
        if (b === "+"){
            return Number(a) + Number(c)
            }
        else if (b ==="-"){
            return a - c
        }else {
            return a * c
        }
    }
    return cal(binomial)
}