const express = require('express');
const app = express()
const cors = require('cors')

app.get('/', (req, res)=>{
  res.status(200).json({
    ism: "Javlon"
  })
})

const port = 3000;

app.listen(port, ()=>{
    console.log('Server ishladi'+ port)
})
