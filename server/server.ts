import express from 'express';
import cors from 'cors';
import colors from 'colors'
import routes from './routes/index'
import { connectDB } from './config/db';

const port = 4000;
connectDB();
const app = express();

app.use(cors({credentials: true}));
app.use(express.json());
app.use("/fitness", routes);
app.listen(port, ()=> {
    console.log(colors.rainbow(`Backend Server Started and Running on Port ${port}...`));
});