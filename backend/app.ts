
import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'
import categoryRouter from './routes/categoryRoutes.js'
import uploadRouter from './routes/uploadRoutes.js'

const app = express()

app.use(cors())
app.use(express.json({ limit: "15mb" }))
app.use(express.urlencoded({ extended: true, limit: "15mb" }))

const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
  res.send("Server is live")
})

// API Routes
app.use('/api/categories', categoryRouter)
app.use('/api/upload', uploadRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
