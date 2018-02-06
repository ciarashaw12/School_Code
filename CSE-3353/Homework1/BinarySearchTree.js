/* Class that sets the base for each node to be inserted in to the BST*/
function Node(k,v,l = null, r= null){
    this.key = k;
    this.value = v;
    this.left = l;
    this.right = r;

}

function BST()
{
    this.root = null;
}

BST.prototype.insert = function(rnode, newNode)
{
    if(newNode.key < rnode.key)
    {
        if(rnode.left === null)
        {
            rnode.left = newNode;

        }
         else{
            this.insert(rnode.left,newNode);  
        }

    }
    else 
    {
        if(rnode.right === null)
        {
            rnode.right = newNode;
        }
        else
        {
            this.insert(rnode.right,newNode);
        }
    }

}

BST.prototype.addNode = function(k,v)
{
    let newNode = new Node(k,v);
        if(this.root === null)
        {
            this.root = newNode;
        }
        else
        {
            this.insert(this.root,newNode);
        }
} 

BST.prototype.preorder = function(n)
{
    if(n !== null)
    {
        console.log(n);
        this.preorder(n.left);
        this.preorder(n.right);
    }
}

BST.prototype.inorder = function(n)
{
    if(n !== null)
    {
        this.inorder(n.left);
        console.log(n.value);
        this.inorder(n.right);
    } 
}

BST.prototype.postorder = function(n)
{
    this.inorder(n.left);
    this.inorder(n.right);
    console.log(n.value);
}




const myTree = new BST();
myTree.addNode("hello",45);
myTree.addNode("hy",89);
myTree.addNode("byt",70);
myTree.preorder(this.root);



