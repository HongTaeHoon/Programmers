function solution(a, d, included) {
const indices = [];
let idx = included.indexOf(true);
while (idx !== -1) {
  indices.push(idx);
  idx = included.indexOf(true, idx + 1);
}
  return  indices.map(list=>list*d+a).reduce((a,b)=>a+b)
}