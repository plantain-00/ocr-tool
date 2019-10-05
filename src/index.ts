import Tesseract from 'tesseract.js'
import express from 'express'
import minimist from 'minimist'
import bodyParser from 'body-parser'
import * as path from 'path'
import * as tmp from 'tmp'
import * as fs from 'fs'

const app = express()
const argv = minimist(process.argv.slice(2)) as {
  p?: number
  h?: string
}
const port = argv.p || 9444
const host = argv.h || 'localhost'

app.use(express.static(path.resolve(__dirname, '../static')))
app.use(bodyParser.json())

app.post('/recognize', async (req, res) => {
  const body = (req as { body: { image: string, languages?: string[] } }).body
  const image = body.image
  const languages = body.languages
  let lang: string | undefined
  if (typeof languages === 'string') {
    lang = languages
  } else if (Array.isArray(languages)) {
    lang = languages.join('+')
  }
  try {
    const file = tmp.tmpNameSync()
    fs.writeFileSync(file, image.split(',')[1], { encoding: 'base64' })
    const result = await Tesseract.recognize(file, lang || 'eng')
    res.json({ text: result.data.text })
  } catch (error) {
    res.json({ error: error.message })
  }
  tmp.setGracefulCleanup()
})

app.listen(port, host, () => {
  console.log(`ocr tool is listening: ${host}:${port}`)
})

process.on('SIGINT', () => {
  process.exit()
})

process.on('SIGTERM', () => {
  process.exit()
})
