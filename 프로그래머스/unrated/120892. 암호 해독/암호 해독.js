function solution(cipher, code) {
   return  Array.from(cipher).map((a,index)=> (index%code+1===code) ? a:'').join('')
}