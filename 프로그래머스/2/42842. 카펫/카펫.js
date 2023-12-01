function solution(brown, yellow) {
// let area = [width, heigth] ;
    // width = yellow 가로 길이 +2
    // height = yellow 세로 길이 +2
    // x = yellow 가로 길이
    // y = yellow 세로 길이
    // x * y = yellow 개수
    // (x+2)*(y+2) = yellow 개수 + brown 개수
     // (x+2)*(y+2) = x * y + brown 개수
    // brown 개수 = (x+2)*(y+2) - (x * y) = 2(x+y) + 4
    // y = yellow 개수 / x
    // brown 개수 = 2(x+(yellow 개수 /x))+4
    // brown * x = 2x^2+2(yellow) + 4x
    // 2x^2+(4-brown)x+2(yellow) = 0
     const x = ((brown - 4) / 2 + Math.sqrt(Math.pow((brown-4)/2,2) - 4 * yellow)) / 2
    width = x + 2
    heigth = yellow/x + 2 
    
    let area = [width, heigth]
    
    // console.log(Math.max(width),Math.min(heigth))
return area
    
    
// 근의 공식 
// 노란 width = x, 노란 height = y로 생각 했을 때
// x * y = yellow, (x+2) * (y+2) = yellow + brown
// y = yellow / x 의 y를 2(x+y) + 4 = brown에 적용하면 x로만 된 이차방정식 결과 도출
// 이를 근의 공식 적용 
}