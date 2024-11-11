require('dotenv').config();
const dataRouter = require("./routes/api")
const client = require("./config/db")
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

let users = []

app.use(cors());

app.use(express.json());



//app.post("/user", (req, res) => {
//  const user = req.body
//
//  const isUserExist = users.find(item => item.email === user.email)
//  if (isUserExist) {
//    return res.status(400).json({ message: 'User with this email already exists' });
//  }
//  else {
//    app.post("/users", (req, res) => {
//      
//    })
//  }
//  users.push(user)
//  res.status(201).json({ message: 'User registered successfully' });
//  console.log(users);
//})

app.use(dataRouter);
app.use(client);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});