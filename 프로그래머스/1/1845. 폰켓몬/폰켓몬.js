function solution(nums) {
    const filterNums = [...new Set(nums)]
  
   return filterNums.length > nums.length/2 ? nums.length/2 : filterNums.length
}