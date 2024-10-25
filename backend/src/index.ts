import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL as string).then(()=>{
    console.log(`DB connected successfully`);
}).catch((error)=>{
    console.log("ERROR while database connection",error.message)
    process.exit(1);
})

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({
        message: "hello from express endpoint!"
    });
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
