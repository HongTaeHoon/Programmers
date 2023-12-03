function solution(a, b) {
   let aaa = String(a)+b
   let bbb = String(b)+a
   if(aaa<bbb){
       return Number(bbb)
   }else{
        return Number(aaa)
   }
    
}