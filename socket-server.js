
const config = require('config.json');

const io = require("socket.io")
const server = io.listen(PORT)

let clients = new Set()


{
    "PORT": 8500,
    "IDLE_INTERVAL": 1000,
    "CHANNEL_START_CONNECTION": "connect",
    "CHANNEL_CLOSE_CONNECTION": "disconnect",
    "CHANNEL_MESSAGES_CONNECTION": "messages",
    "SOCKET_SERVER_BASE_PATH": "http://localhost",
    "CLOCK": {
        "updateRate": 1000
    }
}



server.on(config.CONNECTI, (client) => {

    console.info(`Client ${client.id} started a connection at ${new Date().toISOString()}.`)

    client.on(DISCONNECT_CHANNEL, () => {
        console.info(`Client ${client.id} closed connection at ${new Date().toISOString()}`)
    })

    client.on(MESSAGES_CHANNEL, function (message) {
        console.info(`Client ${client.id} sent a message.`)
        console.info(`message: ${message}`)
        client.emit("messages", "This is a message back to client.")
    })

})

setInterval(() => {
    clients.forEach((client) => {
        client.emit("messages", "This is a repettive weird message for all clients.")
    })
}, IDLE_INTERVAL)
