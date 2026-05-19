class MinStack {
    constructor() {
        this.stack=[];
        this.minValStack=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(!this.minValStack.length||this.minValStack.at(-1)>=val){
            this.minValStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
       const poppedVal= this.stack.pop();
       if(poppedVal===this.minValStack.at(-1)){
        this.minValStack.pop();
       }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValStack.at(-1)
    }
}
