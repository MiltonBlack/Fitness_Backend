import express from 'express';
import cors from 'cors';
import routes from './routes/index'
import { connectDB } from './config/db';

const port = 4000;
connectDB();
const app = express();

app.use(cors({credentials: true}));
app.use(express.json());
app.use("/fitness", routes);
app.listen(port, ()=> {
    console.log(`Backend Server Started and Running on Port ${port}...`);
});