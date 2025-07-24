import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('✅ MongoDB Connected')
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message)
    process.exit(1) // Exit the app if DB connection fails
  }
}

export default connectDB
