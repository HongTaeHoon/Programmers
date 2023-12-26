function solution(num_list) {
   aaa=num_list.map((v,index)=> v<=0 ?index : null ).filter(v=> v !== null) 
   return aaa.length>0 ? aaa[0] : -1
}