function solution(arr1, arr2) {
    arr3 = []
    for(i=0; i<arr1.length; i++){
        arr4 = []
        arr3.push(arr4)
        for(j=0; j<arr1[i].length; j++){
                    arr4.push(arr1[i][j]+arr2[i][j])

        }
        
    }
return arr3
}