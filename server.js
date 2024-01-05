const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes')
const PORT = 3001;



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/index.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/login.html'))
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/dashboard.html'))
})

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})