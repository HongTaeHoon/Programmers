function solution(s) {
return s.split(' ').map((a)=>{
  return a.split('').map((b,idx)=>{
      if(idx%2===0){
          return b.toUpperCase()
      }else return b.toLowerCase()
  }).join('')
}).join(' ')
}