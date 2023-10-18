function solution(numer1, denom1, numer2, denom2) {
aaa = [numer1*denom2+numer2*denom1,denom1*denom2]
    for(i=aaa[1];i>1;i--)
       if(aaa[0]%i===0 && aaa[1]%i===0){
            console.log(i)
        return( aaa.map(num=>num/i))
        }
         return aaa
}