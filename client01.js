import { io } from "socket.io-client";

const socket = io("ws://localhost:3000", {
  reconnectionDelayMax: 10000,
  query: {
    "name": "alilopez"
  }
});

socket.emit("bridge",{source:'alilopez', target: 'kelly', task: 'Imprimir'})

socket.on ("msn", data => {
  console.log("[alilopez] Datos recibidos: ", data)
})