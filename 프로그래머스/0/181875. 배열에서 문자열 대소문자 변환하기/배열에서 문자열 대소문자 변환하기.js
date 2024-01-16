function solution(strArr) {
    aaa=[]
  for(i=0;i<strArr.length;i++)
      i%2===0 ? aaa.push(strArr[i].toLowerCase()) : aaa.push(strArr[i].toUpperCase())
    return aaa
}