function solution(numbers) {
    arr = []
for(i = 0 ; i < numbers.length-1; i++){
    for(j = i+1; j < numbers.length; j++){
        arr.push(numbers[i]+numbers[j])
    }
}
    return Array.from(new Set(arr.sort((a,b)=>a-b)))
}