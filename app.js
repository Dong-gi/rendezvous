const dgram = require('dgram')
const fastify = require('fastify')({ logger: false })

fastify.get('/health', (request, reply) => '')
fastify.listen(50001, '0.0.0.0')


const server = dgram.createSocket('udp4')
server.on('message', console.log)
server.bind(50000)
