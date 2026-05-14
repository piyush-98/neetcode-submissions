class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let dataStack=[];
        const operatorSet=new Set(['+','-','*','/']);
        for(let token of tokens){
            if(operatorSet.has(token)){
                let operand2=dataStack.pop();
                let operand1=dataStack.pop();
                let expValue;
                    switch(token){
                        case '+':{
                            expValue=operand1+operand2
                            break;
                        }
                        case '-':{
                            expValue=operand1-operand2
                            break;
                        }
                        case '*':{
                            expValue=operand1*operand2
                            break;
                        }
                        case '/':{
                            expValue=Math.trunc(operand1/operand2)
                            break;
                        }
                    }
                
                dataStack.push(expValue)
            }
            else{
                dataStack.push(parseInt(token))
            }
        }
        return dataStack[0]
    }
}

[10,6,-132]

