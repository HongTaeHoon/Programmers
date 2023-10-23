function solution(num_list, n) {
    aaa = []
    for(i=0;i<num_list.length;i= i+n){
           aaa.push(num_list.slice(i,i+n))
    }
return aaa
}