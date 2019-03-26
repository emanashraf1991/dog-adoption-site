//Our imports and Express Server Declaration 
const express = require('express');
const server = express();
server.use(express.json());

//Port Definition and Server Listener
server.listen(5000, ()=> console.log(`\n Running on port 5000\n`))

//Our 1st Get request to the route '/'
server.get('/', (req, res) => {
  res.send("Woof Woof! We Out the Pound!")
});