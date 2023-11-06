function solution(n, arr1, arr2) {
    
    result = []
    arr3 = []
    for(x of arr1){
        arr4= []
        x = x.toString(2)
        for(i = 0; i < n-x.length; i++){
            arr4.push(0)
        }
           arr4.push(x)
        arr3.push(arr4.join(''))   
    }
    
        arr5 = []
    for(x of arr2){
        arr6= []
        x = x.toString(2)
        for(i = 0; i < n-x.length; i++){
            arr6.push(0)
        }
           arr6.push(x)
        arr5.push(arr6.join(''))   
    }
    for(i = 0; i < n; i++){
        answer = ''
        for(j = 0; j<n; j++)
       if(arr3[i][j]+arr5[i][j] ==='00'){
           answer +=' '
       }else {
           answer +='#'
       }
        result.push(answer)
    }

   return result
}