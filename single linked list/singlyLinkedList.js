//  code for creating linked list with the help of class, constructue ,methods 
//  and write some proprty( push ,pop,length,shift,unshift) they all are mehods in class


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        var node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        else {
            let prevTail = this.head;
            let deletedNode = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = this.head;
            }
            else {
                while (prevTail.next != this.tail) {
                    prevTail = prevTail.next;
                }
                prevTail.next = null;
                this.tail = prevTail;
            }
            this.length--;
            return deletedNode;
        }
    }

    shift() {
        if (!this.head) {
            return undefined
        } else {
            let head = this.head;
            this.head = this.head.next
            head.next = null
            this.length--
            return head
        }
    }

    unshift(value) {
        let newHead = new Node(value);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        }
        else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(position) {
        if (position < 1 || position > this.length) {
            return null;
        }
        else {
            let traverse = this.head;
            position -= 1;
            while (position >= 1) {
                traverse = traverse.next;
                position -= 1;
            }
            return traverse;
        }
    }
    set(position, newValue) {
        if (position < 1 || position > this.length) {
            return false;
        }
        else {
            this.get(position).val = newValue;
            return true;
        }
    }
    insert(position, value) {
        let list = new Node(value)
        if (position < 0 || position > this.length)
            return false    // `length must be 0 to ${this.length}`
        else {
            if (position === this.length) {
                this.tail.next = list
                this.tail = list
            } else if (position == 0) {
                this.unshift(value)
                // this.head.next = this.head
            } else {
                let prevTail = this.get(position - 1)
                let temp = prevTail.next
                // console.log(prevTail);
                prevTail.next = list
                list.next = temp
            }
            this.length++
            return this
        }
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        if (index == this.length) {
            return this.pop()
        }
        if (index == 0 || index == 1) {
            return this.shift();
        }
        let previous = this.get(index - 1);
        let rem = previous.next;
        previous.next = rem.next;
        this.length--
        return true
    }
    
    print() {
        let ans = '';
        let temp = newList.head;
        while (temp != null) {
            ans += temp.val + '->';
            temp = temp.next;
        }
        ans += 'null'
        console.log(ans);
    }
               
    reverse() {
        var curr = this.head;
        // this.head = this.tail;
        // this.tail = curr;
        let prev = null;
        let next = curr.next;
        while (next != null) {
            // this.print();
            curr.next = prev;
            prev = curr;
            curr = next;
            next = next.next;
        }
        curr.next = prev;
        this.head = curr;
        return this;
    }
    

}
var newList = new SinglyLinkedList();
newList.push(8)
newList.push(10);
newList.push(100);
newList.push(5);

// console.log(newList.pop());
// console.log(newList.pop());
// console.log(newList.pop());
// console.log(newList.pop());
// console.log(newList.pop());



// console.log(newList.shift())
// console.log(newList.shift())
// console.log(newList.shift())
// console.log(newList.shift())
// console.log(newList.shift())




let ans = '';
let temp = newList.head;
while (temp != null) {
    ans += temp.val + '->';
    temp = temp.next;
}
ans += 'null'
console.log(ans);
/*
5->4->3->2->1->null
tail = 1
head = 5
newNode insert 
tail->next = newNode
tail = newNode 
*/