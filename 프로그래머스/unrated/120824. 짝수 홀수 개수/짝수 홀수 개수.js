function solution(num_list) {
aaa=[]
bbb=[]
    for(i=0;i<num_list.length;i++)
        if(num_list[i]%2===0)aaa.push(num_list[i])
    else if (num_list[i]%2===1)bbb.push(num_list[i])
 return [aaa.length,bbb.length]
}