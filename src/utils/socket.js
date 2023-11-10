import io from "socket.io-client";

const socket = io.connect("http://34.202.67.106:8080");

export default socket