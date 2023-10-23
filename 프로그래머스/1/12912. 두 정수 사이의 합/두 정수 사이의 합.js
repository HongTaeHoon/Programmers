function solution(a, b) {

    if(a < b){
    let x = 0
      for(i=a;i<=b;i++){
        x+=i
        }
        return x
    }else if(a > b){
     let y = 0
        for(i=b;i<=a;i++){
        y+=i
        }
        return y
    }else if(a = b){
        return a
    }
}