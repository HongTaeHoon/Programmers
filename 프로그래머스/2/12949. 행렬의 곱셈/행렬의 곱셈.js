function solution(arr1, arr2) {
let answer =[]
    for(i = 0; i< arr1.length; i++){
        let arr = []
        for(j=0; j < arr2[0].length; j++){
            let sum = 0
            for(n = 0; n< arr1[i].length; n++){
                sum += arr1[i][n]*arr2[n][j]
        }
        arr.push(sum)
    }
        answer.push(arr)
    }
return answer
}