class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class stack{
    constructor(){
        this.first=null
        this.last=null
        this.size=0
    }

    push(value){
        var node = new Node(value)

        if(!this.first){
            this.first=node
            this.last=this.first
        }else{
            let temp =this.first
            this.first=node
            this.first.next=temp
        }
        this.size++
       return this
    }

//     pop() {
        
// if(this.size===)




//     }

}

var newStack = new stack();

newStack.push(5)
newStack.push(6)
newStack.push(7)

console.log(newStack)