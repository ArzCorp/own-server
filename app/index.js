import express from 'express'

import { generateIdForEntity } from './utils/functions/generate-id-for-entity.js'
import { PORT } from './utils/constants/index.js'
import { showLog } from './utils/functions/show-log.js'

const app = express()

app.listen(PORT)

showLog({ message: `Server is running on port ${PORT}`, path: import.meta.filename })

generateIdForEntity('messages')
