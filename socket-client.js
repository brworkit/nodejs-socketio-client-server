const SOCKET_SERVER_ADDRESS = 'http://localhost:8500'

const SERVER_CONNECT_CHANNEL = 'connect'

const SERVER_MESSAGES_CHANNEL = 'messages'

const io = require("socket.io-client")

// start connetion 
var socket = io.connect(SOCKET_SERVER_ADDRESS);

socket.on(SERVER_CONNECT_CHANNEL, function () {
    socket.on(SERVER_MESSAGES_CHANNEL, (msg) => {
        console.info(msg)
    })
})

