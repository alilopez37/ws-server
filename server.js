import { Server } from "socket.io";
import { Nodes } from "./Nodes.mjs";
import { Node } from './Node.mjs'
import signale from "signale";

const nodes = new Nodes()

const io = new Server(3000);

io.on("connection", (socket) => {

  nodes.addNode(new Node(socket.id, 
    socket.handshake.query.name || 'anonimo', 
    socket))

  console.log("=> ",nodes.toString())

  socket.on("msn", (data)=> {
    let node = nodes.getNode(data.target);
    if (node)
      node.getSocket().emit("msn", data.task)
    else
      signale.error("Target no se encuentra")
  })
});



