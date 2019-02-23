import express from 'express'

import users from './routes/users'

const app = express()

app.use('/users', users)

app.listen(8080, () => {
  console.log('listening')
})
