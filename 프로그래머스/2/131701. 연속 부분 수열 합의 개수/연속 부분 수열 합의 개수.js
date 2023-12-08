function solution(elements) {
    var answer = [];
let arr = [...elements,...elements]
elements.forEach((element,idx)=>{
if(idx < elements.length){
    for(i=0; i<elements.length; i++){
        answer.push(arr.slice(i,i+1+idx).reduce((a,b)=>a+b))
    }}
})
let result = [...new Set(answer)]
return result.length
}