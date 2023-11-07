function solution(nums) {
let sum = 0
   for(i=0; i<nums.length-2; i++){
       for(j=i+1; j<nums.length-1; j++){
           for(k=j+1; k<nums.length; k++){
              let sums = nums[i]+nums[j]+nums[k]
               if(isPrime(sums)){
                   sum += 1
               }
           }
       }
   }
return sum
}

const isPrime = (num) =>{
     for(let j = 2; j <= Math.sqrt(num); j++){
            if(num % j === 0)
                return false;
        }
        return true;
}