// Built-in http module
const http = require("http");

// 3rd party module => socket.io
const socketio = require("socket.io");

// Node server
const server = http.createServer((req, res) => {
  res.end("I am connected to the server.");
});

// Socket.io options to avoid CORS Policy issues
const options = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
};

// Socket.io setup
const io = socketio(server, options);

io.on("connection", (socket) => {
  // ws.send = socket.emit
  socket.emit("welcome", "Connected to websocket server!");

  // ws.on = socket.on
  // We can name the event anything we want...
  socket.on("message", (mssg) => {
    console.log(mssg);
  });
});

// Deciding app port
const PORT = process.env["PORT"] || 8000;

// Listening on decided port
server.listen(PORT, () => {
  console.log(`Node server is listening on port ${PORT}`);
});
