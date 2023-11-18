import api from "./baseApi";
import io from "socket.io-client";

const socket = io.connect(api);

export default socket