function solution(number) {
   let aaa = 0
    for(i=0;i<number.length; i++){
         aaa += Number(number[i])
    }
return aaa%9
}