import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()

connectDB()
connectCloudinary()

// middlewares
app.use(express.json())

// ✅ Fix: Allow CORS from your frontend domain
app.use(cors({
  origin: 'https://doc-on-time-frontend-delta.vercel.app',
  credentials: true
}))

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
})

// ✅ DO NOT start the server — just export the app
export default app
