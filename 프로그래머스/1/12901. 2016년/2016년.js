function solution(a, b) {
    
let date = new Date(`2016-${a}-${b}`)
const dayName = ['SUN','MON','TUE','WED','THU','FRI','SAT']

return dayName[date.getDay()]
}