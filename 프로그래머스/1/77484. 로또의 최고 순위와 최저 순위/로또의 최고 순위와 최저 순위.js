function solution(lottos, win_nums) {
lottos.sort((a,b)=>a-b)
win_nums.sort((a,b)=>a-b)
const grade = [6,6,5,4,3,2,1]
const best = []
for(i=0; i<lottos.length;i++){
    if(lottos[i]===0){
        best.push(0)
    }
    for(j=0; j<win_nums.length; j++){
        if(lottos[i]===win_nums[j]){
            best.push(lottos[i])
        }
    }
}

const worst = []
for(i=0; i<lottos.length;i++){
    for(j=0; j<win_nums.length; j++){
        if(lottos[i]===win_nums[j]){
            worst.push(lottos[i])
        }
    }
}
 return [grade[best.length], grade[worst.length]]
}