function solution(num_list, n) {
    aaa=[]
    aaa.push(num_list.slice(n))
    aaa.push(num_list.slice(0,n))
    return aaa.flat()
}