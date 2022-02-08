require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const { socket } = require("./src/api");
const routes = require("./src/routes");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

socket(io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${5000}`);
});
