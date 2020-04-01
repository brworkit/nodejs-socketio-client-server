const PORT = 8500;
const IDLE_INTERVAL = 15000;
const CONNECT_CHANNEL = 'connect'
const DISCONNECT_CHANNEL = 'disconnect'
const MESSAGES_CHANNEL = 'messages'

const io = require("socket.io")
const server = io.listen(PORT)

let clients = new Set();

server.on(CONNECT_CHANNEL, (client) => {

    console.info(`Client ${client.id} started a connection at ${new Date().toISOString()}.`);

    client.on(DISCONNECT_CHANNEL, () => {
        console.info(`Client ${client.id} closed connection at ${new Date().toISOString()}`);
    });

    client.on(MESSAGES_CHANNEL, function (message) {
        console.info(`Client ${client.id} sent a message.`);
        console.info(`message: ${message}`);
        client.emit("messages", "This is a message back to client.");
    });

});

setInterval(() => {
    clients.forEach((client) => {
        client.emit("messages", "This is a repettive weird message for all clients.");
    })
}, IDLE_INTERVAL)
