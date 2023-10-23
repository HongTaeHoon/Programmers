function solution(n) {
// if(n === 3628800){ 
//     return 10
// }else if (n <= 362880 || n> 40320){
//     return 9
// }
if( n ===1 ){
    return 1
}else if (n<6){
    return 2
}else if (n<24){
    return 3
}else if (n<120){
    return 4
}else if (n<720){
    return 5
}else if (n<5040){
    return 6
}else if (n<40320){
    return 7
}else if (n<362880){
    return 8
}else if (n<3628800){
    return 9
}else return 10
} 