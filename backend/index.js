import express from 'express'
import bodyParser from 'body-parser'

import users from './routes/users'
import './config/connection'
import './config/passport'

const app = express()
app.use(bodyParser.json())

app.use('/api/users', users)

app.listen(8080, () => console.log('listening'))
