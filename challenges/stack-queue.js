/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

function Stack() {
    this.stack = {};
    this.length = 0;
}

Stack.prototype.push = function(val){
    this.stack[this.length] = val;
    this.length++;
}

Stack.prototype.pop = function(){
    if(this.length === 0) return undefined;
    let ans = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length--;
    return ans
}


function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.queue = {};
    this.length = 0;
}

Queue.prototype.enqueue = function(val){
    this.queue[this.length] = val;
    this.length++;
}
Queue.prototype.dequeue = function(){
    if(this.length === 0) return undefined;

    let ans = this.queue[0];
    for(let i = 0; i < this.length - 1; i++){
        this.queue[i] = this.queue[i+1];
    }
    delete this.queue[this.length - 1];
    this.length--
    return ans;
}


module.exports = { Stack, Queue };
