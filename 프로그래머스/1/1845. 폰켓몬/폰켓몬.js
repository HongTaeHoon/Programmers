function solution(nums) {
// console.log( [...new Set(nums)],nums.length/2)
    // for(i=0; i<nums.length; i++)
    const filterNums = [...new Set(nums)]
    if(filterNums.length === 1){
        return 1
    }else if( filterNums.length > nums.length/2){
        return nums.length/2
    }else if(filterNums.length === nums.length/2){
        return filterNums.length
    }else if(filterNums.length < nums.length/2){
        return filterNums.length
    }
}