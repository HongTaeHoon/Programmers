function solution(names) {
    aaa=[]
 names.map((name,idx)=>{if(idx%5===0)aaa.push(name)})
    return aaa
}