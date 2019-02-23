import { connect } from 'mongoose'

export default connect(
  'mongodb://localhost/gitapp',
  { useNewUrlParser: true }
)
