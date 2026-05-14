class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0;
        let j=heights.length-1;
        let result=0;
        while(i<j){
            const waterAmount=Math.min(heights[i],heights[j])*(j-i);
            result=Math.max(result,waterAmount);
            if(heights[i]>heights[j]){
                j--;
            }
            else{
                i++
            }
        }
        return result;
    }
}
