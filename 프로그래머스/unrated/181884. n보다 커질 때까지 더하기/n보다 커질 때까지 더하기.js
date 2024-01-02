function solution(numbers, n) {
    let ans = 0;
    while (ans<=n) ans+=numbers.shift();
    return ans;

}