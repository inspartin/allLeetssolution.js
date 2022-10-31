var permuteUnique = function(nums) {
  const res = []
  const map = new Map()
  bkt(nums, map, 0)
  for(const [k,v] of map){
    res.push(v)
  }
  return res
};

function bkt(nums, map, n){
  if(n === nums.length-1){
    map.set(nums.join(''), nums.slice())
    return
  }
  for(let i=n;i<nums.length;i++){
    [nums[i], nums[n]] = [nums[n], nums[i]]
    bkt(nums, map, n+1);
    [nums[i], nums[n]] = [nums[n], nums[i]]
  }
}
