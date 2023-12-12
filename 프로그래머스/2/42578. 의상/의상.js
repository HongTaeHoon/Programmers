function solution(clothes) {
    let answer = 1
    let ootd = {};

    clothes.forEach ( i => {
        const key = i[1];

        if(ootd[key] === undefined) {
            ootd[key] = [i[0]];
        } else {
            ootd[key].push(i[0]);
        }
    });
    
       for (let [key, value] of Object.entries(ootd)) {
        answer *= (ootd[key].length+1);
    }
    answer -= 1
   return answer
}