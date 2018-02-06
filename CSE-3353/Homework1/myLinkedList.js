class Node
{
  constructor(data,next=null)
  {
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  
  constructor()
  {
    this.head = null;
  }
  
  addNode(data)
  {
    if(this.head === null)
    {
      this.head = new Node(data);
      return;
    }
    
    let curr = this.head;
    while(curr.next !== null)
    {
      curr = curr.next;
    }
    curr.next = new Node(data);
    
  }
  
  
  print()
  {
    let curr = this.head;
    while(curr !== null)
    {
      console.log(curr.data);
      curr = curr.next;
    }
    
  }
  
  forEach(func)
  {
    let curr = this.head;
    while(curr !== null)
    {
      func(curr.data)
      curr = curr.next;
    }
  }
  
  map(){
    
  }
  
  
}

const myList = new LinkedList();
