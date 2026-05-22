class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const charFreq=Array(26).fill(0);
        if(s2.length<s1.length){
            return false
        }
        const s2CharFreq=Array(26).fill(0);

        for(let i=0;i<s1.length;i++){
            charFreq[s1[i].charCodeAt(0)-97]++;
            s2CharFreq[s2[i].charCodeAt(0)-97]++;
        }
        let matches=0
        for(let i=0;i<26;i++){
            if(charFreq[i]===s2CharFreq[i])
                matches++;
        }
        if(matches===26){
            return true;
        }
        let j=s1.length;
        let i=0
        while(j<s2.length){
            if(matches===26){
                return true;
            }
            const decrementIndex=s2[i].charCodeAt(0)-97;
            const incrementIndex=s2[j].charCodeAt(0)-97;
            s2CharFreq[decrementIndex]--;
            if(s2CharFreq[decrementIndex]===charFreq[decrementIndex]){
                matches++;
            }
            else if(charFreq[decrementIndex]-s2CharFreq[decrementIndex]===1){
                matches--;
            }
            s2CharFreq[incrementIndex]++;
            if(s2CharFreq[incrementIndex]===charFreq[incrementIndex]){
                matches++;
            }
            else if(s2CharFreq[incrementIndex] - charFreq[incrementIndex]===1){
                matches--;
            }
            // let matches=0
            // for(let i=0;i<26;i++){
            //     if(charFreq[i]===s2CharFreq[i])
            //         matches++;
            // }
            j++;
            i++;
        }
        return matches===26
    }
}

// abc
// laca


