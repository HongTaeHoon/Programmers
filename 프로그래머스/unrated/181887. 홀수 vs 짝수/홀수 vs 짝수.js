function solution(num_list) {
    aaa=[]
    bbb=[]
    for(i=0;i<num_list.length;i++)
        if(i%2===0){aaa.push(num_list[i])}
    else{bbb.push(num_list[i])}
    const aaaSum = aaa.reduce((a,b)=>a+b)
    const bbbSum = bbb.reduce((a,b)=>a+b)
    return aaaSum < bbbSum ? bbbSum : aaaSum
}