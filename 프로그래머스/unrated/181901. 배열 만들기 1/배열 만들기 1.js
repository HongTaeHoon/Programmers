function solution(n, k) {
   aaa=[] 
    for(i=1;i<=n;i++)
    if(i%k===0)aaa.push(i)
    return aaa
}