const express = require('express');

const api = express();
api.use((req,res,next) => {
  console.log('Hello');
});


const api = express();
api.listen(3000, () => {
  console.log('API up and running!');
});

api.get('/', (req, res) => {
    res.send('Hello, world!');
  });