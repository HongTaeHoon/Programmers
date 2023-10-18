function solution(code) {
    aaa = Array.from(code)
    bbb= []
   
 const result = aaa.filter(mode => mode !== '1');
    for(i=0;i<result.length;i++)bbb.push(result[i++])
    return bbb.join('')==='' ? "EMPTY" : bbb.join('')
    

   
    
}