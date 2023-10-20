function solution(s){
    const lowerCase = s.toLowerCase()
    const p = lowerCase.split('').filter((a)=> a==='p')
    const y = lowerCase.split('').filter((a)=> a==='y')
    return p.length === y.length ? true : false
    

}