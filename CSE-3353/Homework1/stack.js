class Node
{
  constructor(data,prev=null)
  {
    this.data = data;
    this.prev = next;
  }
}

class Stack{
  
  constructor()
  {
    this.top = null;
    this.size = 0;
  }
  
  Push(data)
  {
    let newNode = new Node(data);
    if(this.top === null)
    {
        this.top = newNode;
        return;
    }

    newNode.prev = this.top;
    this.top = newNode;
    this.size = size + 1;
    return this.top;
  }

  pop()
  {
      let temp = this.top;
      this.top = this.top.prev;
      this.size = size - 1;
      return temp;

  }
  
  print()
  {
    while(this.top !== null)
    {
        console.log(top.data);
        top.pop();
    }
  }

}

const myList = new Stack();
myList.addNode(5);
myList.addNode(45);
