import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import userRouter from './routes/userRoute.js'; // ✅ singular if file is userRoute.js

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter); // ✅ correct path for /api/user/register

app.get('/', (req, res) => {
    res.send('API is working');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
