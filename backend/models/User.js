import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  github_id: {
    type: String,
    required: true
  },
  name: String,
  avatar: String
})

export default mongoose.model('user', userSchema)
