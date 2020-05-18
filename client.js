
const config = require('./config.json');
const io = require("socket.io-client")

// start connetion 
const SERVER_URL_CONNECTION = config.SOCKET_SERVER_BASE_PATH + `:${config.PORT}` 

var socket = io.connect(SERVER_URL_CONNECTION);

socket.emit(config.CHANNEL_CLOCK, "subscribe")

socket.on(config.CHANNEL_START_CONNECTION, function () {
    
    socket.on(config.CHANNEL_MESSAGES_CONNECTION, (msg) => {
        console.info(msg)
    })

    socket.on(config.CHANNEL_CLOCK, (time) => {
        console.info({time})
    })

})

