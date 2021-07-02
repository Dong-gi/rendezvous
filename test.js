//const dgram = require('dgram');
//
//const client = dgram.createSocket('udp4');
//client.send('hello world', 50000);

import * as dbConfig from './config/dbConfig.json'
import { Pool, Client } from 'pg'

const pool = new Pool(dbConfig)

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
