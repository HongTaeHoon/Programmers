function solution(sizes) {
let w = []
let h = []
sizes.map((a)=>{
    return a.sort((b,c)=>b-c)
})
    for(i=0; i<sizes.length; i++){
    w.push(sizes[i][0])
    h.push(sizes[i][1])
}
    return w.sort((a,b)=>b-a)[0] * h.sort((a,b)=>b-a)[0]
}