function solution(my_string, index_list) {
aaa=[]
    for(i=0;i<index_list.length;i++)
        aaa.push(my_string[index_list[i]])
      return(aaa.join(''))
}