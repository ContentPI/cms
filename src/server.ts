import express, { Request, Response } from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000
const distDir = path.join(__dirname, '../dist')

app.use(express.static(distDir))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(port, () => console.log(`Running on port: ${port}`))
