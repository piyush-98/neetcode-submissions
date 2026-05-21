class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            this.keyStore.set(key,[...this.keyStore.get(key),[value,timestamp]]);
        }
        else{
            this.keyStore.set(key,[[value,timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const storedValues=this.keyStore.get(key)||[]
        let l=0;
        let r=storedValues.length-1;
        while(l<=r){
            let m=l+Math.floor((r-l)/2);
            if(storedValues[m][1]===timestamp){
               return storedValues[m][0]
            }
            else if(storedValues[m][1]<timestamp){
                l=m+1;
            }
            else{
                r=m-1
            }
        }
        return r<0?"": storedValues[r][0];
    }
}

// l=2
// r=1
// m=2

// 1,2,5,8
// l=3
// r=2
