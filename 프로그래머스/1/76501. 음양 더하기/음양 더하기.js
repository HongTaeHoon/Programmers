function solution(absolutes, signs) {
const arr = signs.map((a,idx)=>{
    if(a===true){
      return  1*absolutes[idx]
    }else{
      return  -1*absolutes[idx] 
    }
})
return arr.reduce((a,b)=>a+b)
}