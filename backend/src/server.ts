import express from 'express'
import './database/connection'
import routes from './routes'
import errorHandler from './errors/handler'

import 'express-async-errors'
import cors from 'cors'

import { join } from 'path'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes) // dps do express.json
app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)