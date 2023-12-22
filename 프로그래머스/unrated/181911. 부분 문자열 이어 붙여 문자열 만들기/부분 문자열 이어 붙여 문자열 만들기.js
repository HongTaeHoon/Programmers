function solution(my_strings, parts) {
    aaa=[]
    for(i=0;i<parts.length;i++){
        aaa.push(my_strings[i].slice(parts[i][0],parts[i][1]+1))
    }
    return aaa.join('')
}