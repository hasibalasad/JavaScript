var twoSum = function(nums, target) {
    var a =[]
    for( var i=0; i< nums.length;i++){
        for (var j=i+1; j<nums.length ; j++){
            if(nums[i] + nums[j]== target){
                  a.push(i)
                  a.push(j)
                  return a
                
                
            }
            
        }
    }
    
};
twoSum([3,2,4],6)

