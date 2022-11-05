// Built-in http module
const http = require("http");

// 3rd party module => ws
const websocket = require("ws");

// Node server
const server = http.createServer((req, res) => {
  res.end("I am connected to the server.");
});

// Websocket Server
const wss = new websocket.Server({ server });

wss.on("headers", (headers, req) => {
  console.log("headers", headers);
});

wss.on("connection", (ws, req) => {
  ws.send("Connected to websocket server!");
});

// Deciding app port
const PORT = process.env["PORT"] || 8000;

// Listening on decided port
server.listen(PORT, () => {
  console.log(`Node server is listening on port ${PORT}`);
});
