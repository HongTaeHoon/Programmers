function solution(my_string, m, c) {
    if(m === 1 ) return my_string
    arr = []
for(i=0;i<my_string.length/m;i++){
     arr.push(my_string.split('').slice(i*m,m+m*i)[c-1])
}return arr.join('')
}