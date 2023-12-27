import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import connectDb from "./db/connect.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
const PORT = 8800


// Routes


app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)



// Error Handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});



// Server and Mongo DB

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log("Server Is Connected.!!!")
        })
    } catch (error) {
        console.log(error)
    }
}
start()
