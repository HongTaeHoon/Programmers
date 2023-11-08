function solution(babbling) {

const filter1 = babbling.filter((a)=>!a.includes('ayaaya'))
const filter2 = filter1.filter((a)=>!a.includes('yeye'))
const filter3 = filter2.filter((a)=>!a.includes('woowoo'))
const filter4 = filter3.filter((a)=>!a.includes('mama'))

const aya = filter4.map((a)=>{
      if(a.includes('aya')){
          return a.split('aya').join(' ')
      }else return a
  })
  const ye = aya.map((a)=>{
      if(a.includes('ye')){
          return a.split('ye').join(' ')
      }else return a
})
    
    const woo = ye.map((a)=>{
      if(a.includes('woo')){
          return a.split('woo').join(' ')
      }else return a
})
    
    const ma = woo.map((a)=>{
      if(a.includes('ma')){
          return a.split('ma').join(' ')
      }else return a
})
    return ma.filter((a)=>a.trim() === '').length
    
  }
                     