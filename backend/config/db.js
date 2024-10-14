const { Client } = require('pg');

const client = new Client({
    user: 'your_db_user',
    host: 'localhost',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 5432,
});

client.connect();

module.exports = client;