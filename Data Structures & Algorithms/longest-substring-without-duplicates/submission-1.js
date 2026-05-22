class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const occMap=new Map();
        let i=0;
        let j=0;
        let result=0;
        while(j<s.length){
            if(occMap.has(s[j])){
                const oldPos=occMap.get(s[j]);
                if(oldPos>=i)
                    i=oldPos+1;
            }
            occMap.set(s[j],j);
            result=Math.max(j-i+1,result);
            j++;
        }
        return result;
    }
}






