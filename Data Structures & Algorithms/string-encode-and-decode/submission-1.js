class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString=''
        for(let str of strs){
            encodedString+=(str.length+'#'+str);
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result=[]
        let i=0;
        let stringLength=''
        while(i<str.length){
            if(str.charAt(i)==='#'&&!!stringLength){
                result.push(str.slice(i+1,i+Number(stringLength)+1))
                i=i+Number(stringLength)+1
                stringLength=''
            }
            stringLength+=str.charAt(i);
            i++
        }
        return result;
    }
}
