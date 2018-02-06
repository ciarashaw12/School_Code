class Node
{
  constructor(data,next=null)
  {
    this.data = data;
    this.next = next;
  }
}

class Queue{
  
  constructor()
  {
    this.first = null;
    this.size = 0;
  }
  
  enqueue(data)
  {
      let newNode = new Node(data);
      if(this.first !== null)
      {
          this.first = newNode;
      }
      else
      {
         let temp = this.first;
         while(temp.next)
         {
             temp = temp.next;
         }
         temp.next = newNode;
      }
      
      return newNode
  }
  
  dequeue()
  {
    temp = this.first;
    this.first = this.first.next;
    return temp;
  }
  
  print()
  {
    while()
    
  }
  
  
  
}


