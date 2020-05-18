
const config = require('./config.json');

const io = require("socket.io")
const server = io.listen(config.PORT)

let clients = new Set()

server.on(config.CHANNEL_START_CONNECTION, (client) => {

    console.info(`client ${client.id} connected ${new Date().toISOString()}.`)
    startConnection(client)
    
    

    client.on(config.CHANNEL_CLOSE_CONNECTION, () => {
        console.info(`client ${client.id} closed connection at ${new Date().toISOString()}`)
        let length = clients.length
        console.info(`Clients connected: ${length}`)
        clearTimeout(client.clock)   
        clients.delete(client);     
    })

    client.on(config.CHANNEL_MESSAGES_CONNECTION, function (message) {
        console.info(`client ${client.id} sent a message.`)
        console.info(`message: ${message}`)
        client.emit(config.CHANNEL_MESSAGES_CONNECTION, "This is a message back to client.")
    })

    client.on(config.CHANNEL_CLOCK, function (message) {
        console.info(`client ${client.id} connected to CLOCK CHANNEL`)
        console.info(`message: ${message}`)
        client.emit(config.CHANNEL_CLOCK, `${new Date().toISOString()}`)
        startClock(client)   
    })

})

function startConnection(client) {
    clients.add(client)
    client.emit(config.CHANNEL_CLOSE_CONNECTION, "You are connected")
    const clientsConnected = clients.length
    console.info(`Clients connected: ${clientsConnected}`)
}

function startClock(client) {    
    client.clock = setInterval(() => {        
        client.emit(config.CHANNEL_CLOCK, `${new Date().toISOString()}`)        
    }, config.CLOCK.UPDATE_RATE)
}


