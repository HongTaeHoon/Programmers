function solution(arr, queries) {
aaa=[]
for (i=0;i<queries.length;i++){
   
 bbb = [...arr].slice(queries[i][0],queries[i][1]+1).filter(num=>num>queries[i][2])
    
  ccc=  Math.min(...bbb)
     if(ccc===Infinity){
     ccc = -1
       }
    aaa.push(ccc)
    }

   return aaa

}