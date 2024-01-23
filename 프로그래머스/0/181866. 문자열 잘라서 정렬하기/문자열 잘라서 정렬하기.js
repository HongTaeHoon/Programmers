function solution(myString) {
 return myString.split('x').sort().filter((length)=> length.length>0)
}