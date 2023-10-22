function solution(n) {
    x = 0
    for(i=1; i<=n; i++){
         y = 0
      for(j=1; j<=n; j++){
          if(i%j ===0){
              y +=1
            }
        } if(y >= 3){
          x += 1
      }
    }
   return x
}