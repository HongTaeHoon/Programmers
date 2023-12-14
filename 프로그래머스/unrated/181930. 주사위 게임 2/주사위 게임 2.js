function solution(a, b, c) {
    aa = Math.pow(a, 2)
    bb = Math.pow(b, 2)
    cc = Math.pow(c, 2)
    aaa = Math.pow(a, 3)
    bbb = Math.pow(b, 3)
    ccc = Math.pow(c, 3)
if(a === b && b === c){
    return((a+b+c)*(aa+bb+cc)*(aaa+bbb+ccc))
}else if( a===b ||a === c || b===c ) {
    return ((a+b+c)*(aa+bb+cc))}
    else return a+b+c
    
}