// Simple server for AI proxy and export generation
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5178

app.post('/api/ai/proxy', async (req, res) => {
  const key = process.env.OPENAI_API_KEY
  if(!key){
    return res.status(503).json({ error: 'AI provider not configured. Set OPENAI_API_KEY on the server.' })
  }

  // Minimal proxy example for OpenAI chat completions (user must configure their provider)
  try{
    const { prompt } = req.body
    if(!prompt) return res.status(400).json({ error: 'Missing prompt' })

    // For security we do not call any provider here — this is a placeholder. In production, call provider SDK here.
    return res.json({
      done: false,
      message: 'AI provider configured, but real call is disabled in the scaffold. Replace server/index.ts with a provider SDK call.'
    })
  }catch(e){
    console.error(e)
    res.status(500).json({ error: 'Server error' })
  }
})

app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`))
