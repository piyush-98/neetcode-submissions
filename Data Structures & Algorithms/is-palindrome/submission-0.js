class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(char){
        return /^[a-z0-9]$/i.test(char);
    }
    isPalindrome(s) {
        let i=0;
        let j=s.length-1;
        while(i<j){
            if(!this.isAlphaNum(s[i])){
                i++;
                continue;
            }
            if(!this.isAlphaNum(s[j])){
                j--;
                continue
            }
            if(s[i].toLowerCase()!==s[j].toLowerCase()){
                return false
            }
            else{
                i++;
                j--;
            }
        }
        return true
    }
}


