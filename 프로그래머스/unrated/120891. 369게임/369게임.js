function solution(order) {
    return Array.from(String(order)).filter((a)=>(a==='3'|| a==='6' || a==='9')).length
}