const dgram = require('dgram');
const net = require('net');

// health checker
net.createServer(socket => socket.end('')).listen(50001);

const server = dgram.createSocket('udp4');
server.on('message', console.log);
server.bind(50000);
