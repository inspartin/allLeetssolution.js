var permute = function(nums) {
   let ans = []
   permu(nums)
    
    function permu(nums,i=0){
        
        if(i == nums.length){ ans.push(nums) ; return}
        
       for(let j = i ; j<nums.length;j++){   
          
           [nums[j],nums[i]]=[nums[i],nums[j]]
           permu([...nums],i+1)
       }
        
       
   }
    return ans
};
