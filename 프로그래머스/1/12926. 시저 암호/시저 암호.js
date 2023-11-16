function solution(s, n) {
let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerCase='abcdefghijklmnopqrstuvwxyz'
let answer = ''
for(i=0; i<s.length; i++){
    let text = upperCase.includes(s[i]) ? upperCase : lowerCase
    
    if(text.indexOf((s[i]))%upperCase.length < 0){
         answer +=(' ')
    }else{
        answer += text[(text.indexOf((s[i]))+n)%upperCase.length]
    }
}
return answer
}