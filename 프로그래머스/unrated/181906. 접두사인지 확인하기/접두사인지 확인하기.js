function solution(my_string, is_prefix) {
    aaa=[]
for(i=1;i<=my_string.length;i++)
    aaa.push(my_string.slice(0,i))
    
    return aaa.filter(a=> a===is_prefix).length>0 ? 1 : 0 
}