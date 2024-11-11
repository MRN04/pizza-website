const { query } = require('express');
const { Client } = require('pg');
const express = require('express');
const client = express.Router();

client.use(express.json());

const pool = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'pizzadb',
    password: '1234',
    port: 5432,
});
pool.connect();

client.get("/users", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
        res.json(result.rows)
    }
    catch(error) {
        console.error('Помилка при отриманні користувачів', error);
        res.status(500).send('Помилка сервера');
    }
})

client.post("/user", async (req, res) => {
    const {name, email, password, phone} = req.body
    try {
        const newUser = await pool.query(
            'INSERT INTO users (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, password, phone ]
        )
        res.status(201).json(newUser.rows[0]);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Server error, failed to create user' });
    }
})


//app.post("/users", async (req, res) => {
//    const users = usersArr
//
//    try {
//        const result = await client.query(
//            'INSERT INTO users (user) VALUES ($1, $2, $3) RETURNING *',
//            users
//        )
//        
//        res.json();
//    }
//    catch(err) {
//        console.error(err.message);
//        res.status(500).send('Server error');
//    }
//})
//
//app.get("/users", async (req, res) => {
//    try {
//        const result = await client.query('SELECT * FROM users')
//        res.json(result.rows);
//    } 
//    catch (err) {
//        console.error(err.message);
//        res.status(500).send('Server error');
//    }
//})



//db.users.findMany().where()
//const userId = "100";
//client.query(`SELECT * FROM users`)

module.exports = client;