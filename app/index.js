import express from 'express'

import { PORT } from './constants/config.js'

const app = express()

app.listen(PORT)

console.log(`Server is running on port ${PORT}`)
