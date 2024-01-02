function solution(arr) {
 return arr.map((list)=>{
      if(list>=50&&list%2===0) return list/2
     if(list < 50 && list%2 !==0) return list*2
     return list
  })
 
}