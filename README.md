# Socket Node Client and Server 

## Description
Client and Server programs for testing socket communication.

## Requirements
For development, you will only need Node.js and a node global package, installed in your environement. 

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.

- #### Node installation on Ubuntu

  You can install NodeJs and npm with apt install, using the following commands:
      
      $ sudo apt install nodejs
      
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command from your command line:

    $ node --version        

    $ npm --version

### Socket IO

[Socket IO](https://www.npmjs.com/package/socket.io)
    
    $ npm install socket.io

### Socket IO Client 
[Socket IO Client](https://www.npmjs.com/package/socket.io-client)
    
    $ npm install socket.io-client
    
## Installation

### Project
    $ git clone https://github.com/brworkit/socket-node-example.git
    $ cd socket-node-example
    
## Usage

Start server using: 

    $ npm start server

Start client using (in another bash):
    
    $ node client.js

You will see in your client prompt the current time from Javascript Date class in ISO format:
    
    { time: '2020-05-18T12:53:12.616Z' }

You you see in your server prompt:

    client <client id> connected <time ISO format>.

## License
[MIT License.](https://opensource.org/licenses/MIT)    
Copyright (c) 2020 **brworkit**.