class Tree {
    constructor() { 
        this.root = null;
    }

    add(value) {
        const node = new Node(value)
        if( this.root == null ){
            this.root = new Node(value);
        } else {
            var runner = this.root;
            while(runner){
                if(node.value >= runner.value){
                    if ( runner.right ) {
                        runner = runner.right;
                    } else {
                        runner.right = node;
                        break;
                    }
                    //runner.right = node.value
                } else {
                    if (runner.left) {
                        runner = runner.left;
                    } else {
                        runner.left = node;
                        break;
                    }
                    //runner.left = node.value
                }
            }
        }
    }
    min() {
        var runner = this.root;
        while(runner){
            if(runner.left) {
                runner = runner.left
            }
            else {
                return runner.value
            } 
        }
    }

    min2() {
        if (this.root ===null) {
            return null;
        }

        var runner = this.root;
        while(runner.left) {
            runner = runner.left;
        }

        return runner.value;
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    add(value) {
        

    }
}

const tree = new Tree();


console.log(tree);
tree.add(10);
tree.add(23);
tree.add(8);
tree.add(4);
tree.add(7)
tree.min();
