import { io } from "socket.io-client";

const socket = io("ws://localhost:3000", {
  reconnectionDelayMax: 10000,
  query: {
    "name": "kelly"
  }
});

socket.emit("msn",{source:'kelly', target: 'alilopez', task: 'Imprimir'})

socket.on ("msn", data => {
  console.log("[kelly] Datos recibidos: ", data)
})