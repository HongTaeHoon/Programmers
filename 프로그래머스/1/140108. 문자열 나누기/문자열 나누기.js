function solution(s) {
let answer = 0;
    let letter = '';
    let num1 = 0;
    let num2 = 0;
    for( n of s){
        if(letter === ''){
            letter =n
        }
        if(letter === n){
            num1++
        }else {
            num2++
        }
        if(num1===num2){
            answer++
            letter = '';
            num1=0;
            num2=0;
        }

    }
    if(letter)answer++
    
    return answer
}