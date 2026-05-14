class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const dataStack=[];
        const bracketsMap=new Map([[')','('],['}','{'],[']','[']])
        for(let ch of s){
            if(bracketsMap.has(ch)){
                if(bracketsMap.get(ch)!==dataStack.at(-1)){
                    return false
                }
                dataStack.pop();
            }
            else{
                dataStack.push(ch);
            }
        }
        return !dataStack.length;
    }
}
