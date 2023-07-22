export class Node {
    constructor(id, name, socket){
        this.id = id
        this.socket = socket
        this.name = name
    }

    getName(){
        return this.name;
    }

    getSocket() {
        return this.socket;
    }
}