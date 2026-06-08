class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length<s1.length){
            return false
        }
        const s1Freq=Array(26).fill(0);
        for(let ch of s1){
            s1Freq[ch.charCodeAt(0) - 97]+=1;
        }
        let i=0;
        let j=s1.length-1;
        let tempFreq=Array(26).fill(0);
        for(let k=i;k<=j;k++){
            tempFreq[s2[k].charCodeAt(0)-97]+=1
        }
        while(j<s2.length){
            let matched=true;
            for(let k=0;k<26;k++){
                if(tempFreq[k]!==s1Freq[k]){
                    matched=false
                    break;
                }
            }
            if(matched){
                return true
            }
            tempFreq[s2[i].charCodeAt(0)-97]--;
            i++;
            j++;
            if(j<s2.length)
            tempFreq[s2[j].charCodeAt(0)-97]++;
            
        }
        return false;
    }
}


'lecacbaee'

