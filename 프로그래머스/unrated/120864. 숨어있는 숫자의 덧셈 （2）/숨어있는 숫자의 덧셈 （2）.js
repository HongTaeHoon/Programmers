function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).reduce((a,b)=>+a + +b , 0)
    
}