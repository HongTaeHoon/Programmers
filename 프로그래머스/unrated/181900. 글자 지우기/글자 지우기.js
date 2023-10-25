function solution(my_string, indices) {

return [...my_string].map((a,idx)=>indices.includes(idx) ? 0 : a).filter((b)=>b!==0).join('')


}