function solution(my_string, n) {
    aaa=[]
    for(i=0;i<my_string.length;i++)
        for(j=0;j<n;j++)aaa.push(my_string[i])
    return aaa.join('')
}