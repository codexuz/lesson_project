const express = require('express');
const app = express()
const cors = require('cors')


const ApiKey = "sk-proj-G6lWv8gAxQ3ZN0UqT4rrT3BlbkFJkx990Q2tEj9owqpeEadx"


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
  res.status(200).json({
    ism: "Javlon"
  })
})

const port = 3000;

app.listen(port, ()=>{
    console.log('Server ishladi'+ port)
})
