function solution(ingredient) {
let burger = 0
let pack = []
for(i = 0 ; i < ingredient.length+1 ; i++){
    if(pack.slice(-4).join('') === '1231'){
        pack.splice(-4)
        burger += 1
        pack.push(ingredient[i])
    }else{
        pack.push(ingredient[i])
    }
}
    return burger

}