const express = require("express")
const { WebSocketServer } = require("ws")


// server
const app = express();


// port
const port = '8000';
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// websocket
const camWWS = new WebSocketServer({ port: 8002 });
camWWS.on("connection", (ws, request) => {
  ws.on("close", () => {
  });

  ws.on("message", data => {
    camWWS.clients.forEach(client => {
      client.send(data.toString())
    })
  });
});

const commandWWS = new WebSocketServer({ port: 8003, path: '/command' })
commandWWS.on("connection", (ws, request) => {
  ws.on("close", () => {
  });

  ws.on("message", data => {
    
    if (data.toString() === 'Btn-pressed') {
      commandWWS.clients.forEach(client => {
        client.send("OK")
      })
    };
    
  });
});

module.exports = app;