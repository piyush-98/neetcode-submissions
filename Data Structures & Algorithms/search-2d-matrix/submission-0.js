class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows=matrix.length;
        const col=matrix[0].length;
        let l=0
        let r=rows-1;
        let targetRow=null;
        while(l<=r){
            const mid=l+Math.floor((r-l)/2);
            if(target>=matrix[mid][0] && target<=matrix[mid][col-1]){
                targetRow=mid;
                break;   
            }
            else if(target>matrix[mid][col-1]){
                l=mid+1;
            }
            else{
                r=mid-1
            }
        }
        if(targetRow===null) return false;
        l=0;
        r=col-1;
        while(l<=r){
            const mid=l+Math.floor((r-l)/2);
            if(target===matrix[targetRow][mid]){
                return true;
            }
            else if(target>matrix[targetRow][mid]){
                l=mid+1;
            }
            else{
                r=mid-1;
            }
        }
        return false;
    }
}
