function solution(my_string) {
    let arr = my_string.split('')
    return (arr.filter((x,y)=> arr.indexOf(x)===y).join(''))


}