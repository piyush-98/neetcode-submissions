class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap=new Map();
        for(let str of strs){
            const strKey=str.split('').sort().join('');
            if(strMap.has(strKey)){
                const arr=strMap.get(strKey)
                arr.push(str)
                strMap.set(strKey,arr);
            }
            else{
                const arr=Array()
                arr.push(str)
                strMap.set(strKey,arr)
            }
        }
        return Array.from(strMap.values())
    }

}
