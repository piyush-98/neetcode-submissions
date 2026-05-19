class MinStack {
    constructor() {
        this.stack=[];
        this.minValue=Number.MAX_VALUE;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.minValue=Math.min(this.minValue,val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minValue=Math.min(...this.stack)
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
        return this.minValue;
    }
}
