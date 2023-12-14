function solution(num_list) {
aaa= []
bbb=[]
for(i=0;i<num_list.length;i++)
num_list[i]%2 === 0 ? aaa.push(num_list[i]) : bbb.push(num_list[i])
return Number(aaa.join('')) + Number(bbb.join(''))
}