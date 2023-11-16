function solution(s, skip, index) {
const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',"r",'s','t','u','v','w','x','y','z'].filter((a)=> !skip.includes(a))

return s.split('').map((a)=>arr[(arr.indexOf(a)+index)%arr.length]).join('')
}