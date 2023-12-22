function solution(my_string) {
aaa=[]
    for(i=0;i<my_string.length;i++)aaa.push(my_string.slice(i));
   return aaa.sort()
}