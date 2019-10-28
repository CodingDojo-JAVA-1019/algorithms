class BTNode { 
    constructor(value){
    this.val = value; 
    this.left = null; 
    this.right = null;
    }
}

class BST { 
    constructor(){
    this.root = null; 
    }
    
    add(val){
        var node=new BTNode(val);
        if(this.root==null){
            this.root=node;
        }else{
            var runner = this.root;
            while (runner){
                if(val>= runner.val){
                    if(runner.right==null){
                        runner.right=node;
                        break;
                }else{
                    runner = runner.right;
                    }
                }
                else{
                    if (runner.left==null){
                        runner.left=node;
                        break;
                    } 
                    runner = runner.left;
                    }
                }
            }

        
        console.log(node.val);
    }

    
    
    
}
bSTree=new BST();
bSTree.add(2);
bSTree.add(5);
bSTree.add(5);
bSTree.add(1);
console.log(bSTree.root.right.val);
console.log(bSTree.root.left.val);





// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values. 