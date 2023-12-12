function solution(num, total) {
        const getFirstValue = (num,total)=>{
        if(num % 2 === 0){
            return Math.ceil(total / num) - (num / 2)
        }
        else{
            return total / num - Math.floor(num / 2)
        }
    }
 const firstValue = getFirstValue(num,total)
 arr = (Array(num).fill(firstValue))
    arr.map((num,idx)=>num+idx)
return arr.map((num,idx)=>num+idx)
}