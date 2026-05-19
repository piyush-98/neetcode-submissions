class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const rightTallestTowers=Array(height.length).fill(0);
        const leftTallestTowers=Array(height.length).fill(0);
        let tallestTower=height[0];
        for(let i=1;i<height.length;i++){
            leftTallestTowers[i]=tallestTower;
            tallestTower=Math.max(tallestTower,height[i]);
        }
        tallestTower=height[height.length-1];
        for(let i=height.length-2;i>=0;i--){
            rightTallestTowers[i]=tallestTower;
            tallestTower=Math.max(tallestTower,height[i]);
        }
        let result=0
        for(let i=1;i<height.length-1;i++){
            const towerToFill=Math.min(rightTallestTowers[i],leftTallestTowers[i]);
            const currVol=(towerToFill - height[i]);
            if(currVol>0){
                result+=currVol;
            }
        }
        return result;
    }
}
