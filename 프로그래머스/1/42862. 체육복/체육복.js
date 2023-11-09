function solution(n, lost, reserve) {

    let students = new Array(n).fill(1)
    
reserve.map((a)=>students[a-1]++) 
lost.map((a)=>students[a-1]--)

    for (let i = 0; i < n; i++) {
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i] = 1;
                students[i - 1] = 1;
            } else if (students[i + 1] === 2) {
                students[i] = 1;
                students[i + 1] = 1;
            }
        }
    }

    return students.filter((s) => s > 0).length;
}