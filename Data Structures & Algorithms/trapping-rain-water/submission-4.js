class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i=0
        let j=height.length-1;
        let leftMax=height[0]
        let rightMax=height[height.length-1]
        let result=0
        while(i<j){
            let towerTocompare;
            if(leftMax<=rightMax){
                i++;
                towerTocompare=i
            }
            else{
                j--;
                towerTocompare=j
            }
            const shorterTower=Math.min(leftMax,rightMax);
            if((shorterTower- height[towerTocompare])>0){
                result+=shorterTower- height[towerTocompare];
            }
            leftMax=Math.max(leftMax,height[i]);
            rightMax=Math.max(rightMax,height[j]);
        }
        return result;
    }
}
