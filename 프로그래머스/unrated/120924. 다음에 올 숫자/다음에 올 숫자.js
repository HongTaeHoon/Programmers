function solution(common) {
console.log(common[common.length-1]-common[common.length-2]===common[1]-common[0])
    if(common[common.length-1]-common[common.length-2]===common[1]-common[0]){
        return common.at(-1)+common[1]-common[0]
    }else{
        return common.at(-1)*common[1]/common[0]
    }
}