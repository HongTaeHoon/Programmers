function solution(name, yearning, photo) {
let score = [];
    for(i = 0; i < photo.length; i++){
        let sum = 0;
        for(j = 0; j<photo[i].length; j++){
            for(k = 0; k < name.length; k++){
                if(name[k] === photo[i][j]){
                    sum+=yearning[k]
                }
            }
        }
        score.push(sum)
    }
    return score
}