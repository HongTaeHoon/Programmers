function solution(s) {
return s.split(' ').map((v)=>{
    return v.split('').map((n,idx)=>{
    if(idx === 0){
        return n.toUpperCase()
    }else{
        return n.toLowerCase()
    }
}).join('')
}).join(' ')
}