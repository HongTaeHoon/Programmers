function solution(n) {
    if(n%7===0) return n/7
    if (~~(n/7)===0) return 1 
    else return ~~(n/7)+1
    
}