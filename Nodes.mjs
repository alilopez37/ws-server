export class Nodes {
  listNodes = [];
  
  addNode(node){
    this.listNodes.push(node)
  }

  getNode(target){
    let node = null
    let status = true;
    let i;
    for (i=0;i<this.listNodes.length && status;i++)
      if (this.listNodes[i].getName() === target) {
        status = false;
        node = this.listNodes[i];
      }
    
    return node;
  
  }

  disconectNode (id) {
  }

  toString(){
    return this.listNodes.map( node => node.name)
  }
    
}

