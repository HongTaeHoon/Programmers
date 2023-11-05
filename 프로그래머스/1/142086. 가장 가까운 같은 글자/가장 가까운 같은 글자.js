function solution(s) {
let text = []
let count = []
for (i = 0; i<s.length; i++){
    if(!text.includes(s[i])){
        count.push(-1)
        text.push(s[i])
    }else{
        count.push(text.length - text.lastIndexOf(s[i]))
        
        text.push(s[i])
    }
}
 return count
}