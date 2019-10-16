class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = new Node(value);
        } else {
            var runner = this.root;
            while (runner) {
                if (node.value >= runner.value) {
                    if (runner.right) {
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
        while (runner) {
            if (runner.left) {
                runner = runner.left
            } else {
                return runner.value
            }
        }
    }

    min2() {
        if (this.isEmpty()) {
            return null;
        }

        var runner = this.root;
        while (runner.left) {
            runner = runner.left;
        }

        return runner.value;
    }

    max() {
        if (this.isEmpty()) {
            return null;
        }

        var runner = this.root;
        while (runner.right) {
            runner = runner.right;
        }

        return runner.value;

    }

    isEmpty() {
        return this.root === null;

    }

    height() {
        if (this.isEmpty()) {
            return null;
        }
        var count = 0
        var runner = this.root;
        while (runner.right) {
            runner = runner.right;
            count += 1
        }

        return count;

    }

    contains(val) {
        if (this.isEmpty()) {
            return false;
        }
        var runner = this.root;
        while (runner) {
            if (runner.value == val) {
                return true;
            }

            if (val < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
    }

    size(){
        if(this.isEmpty()){
            return 0;
        }
        this.root.size()
    }
    
}
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    size(){
        var intsize = 1;
            
            if(this.left != null){
                intsize += this.left.size();
            }
            if(this.right != null){
                intsize += this.right.size();
            }
        
        return intsize;
    
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
tree.isEmpty();
console.log(tree.isEmpty());
console.log(tree.contains(1));
console.log(tree.contains(4));
console.log(tree.balanced());