const socket = (io) => {
  io.on("connection", (socket) => {
    socket.on("join_chat", () => {
      socket.join("main_room");
    });

    socket.on("send_message", (data) => {
      socket.to("main_room").emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

module.exports = socket;
