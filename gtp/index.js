import express  from 'express';
const app = express()
import cors  from 'cors'
import OpenAI   from 'openai'


const ApiKey = "sk-proj-G6lWv8gAxQ3ZN0UqT4rrT3BlbkFJkx990Q2tEj9owqpeEadx"

const openai = new OpenAI({
  apiKey: ApiKey
})

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get('/', async (req, res)=>{
  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Write a tagline for an ice cream shop.'
});
  res.status(200).json(completion)
})

const port = 3000;

app.listen(port, ()=>{
    console.log('Server ishladi'+ port)
})
