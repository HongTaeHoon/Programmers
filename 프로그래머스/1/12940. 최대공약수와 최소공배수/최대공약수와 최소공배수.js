function solution(n, m) {
const gcd = (x, y) => x % y === 0 ? y : gcd(y,x%y);
const lcm = (x,y) => x*y/(gcd(x,y))

    return [gcd(n,m),lcm(n,m)]
}