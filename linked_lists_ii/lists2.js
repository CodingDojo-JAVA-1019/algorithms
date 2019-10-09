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
    console.log(runner);
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
}

var list = new List();
list.add(1);
list.add(2);
list.add(3);
list.addToBack(4);
// console.log(list.contains(4));
console.log(list.reverse2());