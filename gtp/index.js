import express  from 'express';
const app = express()
import cors  from 'cors'
import OpenAI   from 'openai'


const ApiKey = ""

const openai = new OpenAI({
  apiKey: ApiKey
})


const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost:3000',
  'http://localhost:8080',
  'http://localhost:5173',
  'http://127.0.0.1:5500',
  'https://examonline-rouge.vercel.app',
  'https://examonline-edumo.uz/'
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));


app.post('/', async (req, res)=>{
  const { promptedText } = req.body
  console.log(promptedText)
  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: promptedText,
    max_tokens: 800
});
  res.status(200).json(completion)
})

const port = 3000;

app.listen(port, ()=>{
    console.log('Server ishladi'+ port)
})
