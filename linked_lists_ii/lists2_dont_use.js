class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List{
    constructor(){
    this.head = null;   
    }

    add(value){
        var newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }else{
            var current = this.head;
            newNode.next = current;
            this.head = newNode;

        } 
    }

    addToBack(value){
        if(this.head == null){
        return this.add(value);
            }
        var newNode = new Node(value);
        var runner = this.head;
        while(runner.next !== null){
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

    contains(value){
        var runner = this.head;
        var contains = false;
        while(runner){
            console.log(runner,"*****************")
            if(runner.value == value){
                contains = true;
            }
            runner = runner.next;
        }
        return contains;

    }

    reverse(){
        var temp=new List();
        var runner = this.head;
        while(runner){
            temp.add(runner.value);
            console.log(runner.value);
            console.log(runner);
            runner=runner.next;
        }
        this.head = temp.head;
        return this;
    }
    reverse2(){
        var runner = this.head;
        // var temp = this.head;
        var next=runner.next;
        var previous = null;
        while (runner){
            console.log(runner, runner.value);
            next=runner.next;
            runner.next=previous;
            previous = runner;
            runner = next;
        }
        this.head=previous;
        return this;
    }

    // Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it. 

    returnVal(val){
        var runner = this.head;
        var count = 0;
        while(runner){
            count++;
            runner=runner.next;
        }
        var index = count-val;
        console.log("The count is: " +count+" "+index);
        return index.value;
    }
    lastNode(k){
        var runner = this.head;
        var temparr = [];
        while(runner){
            temparr.push(runner.value);
            runner = runner.next;
        }
        for(var i=0; i<temparr.length; i++){
            if(i == temparr.length-k){
                return temparr[i];
            }
        }
        return null;
    }

    returnVal(val){
        var runner = this.head;
        var follower = this.head;
        var count = 0;
        while(runner && val > 0){
            count++;
            val--;
            runner=runner.next;
        }
        if(val > 0){
            return null;
        }
        while(runner){
            follower = follower.next;
            runner = runner.next;
        }
        return follower.value;
        
    }
    // Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values . N.B.: to be accurate in JavaScript, use === instead of == , since 1 == true == [1] == "1" .

    // Second: you may not have plentiful memory. Can you solve this without an additional array? 


    isPalindrome(){
        var runner = this.head;
        var temparr =[];
        while(runner){
            temparr.push(runner.value);
            runner=runner.next;
        }
        for(var i=0; i<temparr.length/2; i++){
            if( temparr[i] != temparr[temparr.length-1-i]){
                return false;
            }
        }
        return true;
    }

    isPalindrome2(){
        var count =0;
        var runner=this.head;
        while(runner){
            count ++;
            var compare = this.lastNode(count);
            if(runner.value != compare){
                return false;
            }
            runner =runner.next;
        }
        return true;
    }
}
var list = new List();
'racecar'.split('').forEach(char => list.addToBack(char));


// list.addToBack(1);
// list.addToBack(2);
// list.addToBack(3);
// list.addToBack(4);
// list.addToBack(5);
// list.addToBack(4);
// list.addToBack(3);
// list.addToBack(2);
// list.addToBack(1);

// console.log(list.contains(4));
// console.log(list.reverse2());
// console.log("getlastwhooop!",list.lastNode(2));
console.log("Here palindrome 2 is", list.isPalindrome2());