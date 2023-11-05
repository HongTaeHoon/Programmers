function solution(n) {
     if (n === 0) {
        return "0";
    }
    let ternary = "";
    let original = n;
    while (n > 0) {
        ternary = (n % 3) + ternary;
        n = Math.floor(n / 3);
    }
    let decimal = 0;
    for (let i = 0; i < ternary.length; i++) {
        decimal += parseInt(ternary[i]) * Math.pow(3, i);
    }
    return decimal
}