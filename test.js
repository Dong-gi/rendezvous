//const dgram = require('dgram');
//
//const client = dgram.createSocket('udp4');
//client.send('hello world', 50000);

const { Pool, Client } = require('pg')
const DBConfig = require('./config/DBConfig.json')

const pool = new Pool(DBConfig)

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
