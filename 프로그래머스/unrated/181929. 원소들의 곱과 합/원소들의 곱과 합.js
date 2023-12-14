function solution(num_list) {
 sum = num_list.reduce((a,b)=>a+b)
 
 multiply = num_list.reduce((a,b)=>a*b)   
  return  (Math.pow(sum,2) > multiply) ?  1 :0
}