//const dgram = require('dgram');
//
//const client = dgram.createSocket('udp4');
//client.send('hello world', 50000);

import { DBConfig } from './config/DBConfig'
import { Pool, Client } from 'pg'

const pool = new Pool(DBConfig)

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
