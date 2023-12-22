function solution(my_string, is_suffix) {
    aaa=Array.from(my_string)
   bbb=[]
for(i=my_string.length-1;i>=0;i--)bbb.push(aaa.slice(i).join(''))
    return bbb.filter(a=>a===is_suffix).length >0 ? 1 : 0 
}