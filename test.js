const dgram = require('dgram');

const client = dgram.createSocket('udp4');
client.send('hello world', 50000);