import 'dotenv/config'
import express from 'express';
import AuthRoute from './routers/auth';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({message:"Welcome to the authentication Service"});
})


const PORT = process.env.PORT || 5000;
const API_PREFIX = process.env.API_PREFIX;


app.use(`${API_PREFIX}/auth`, AuthRoute);

app.listen(PORT, () => console.log('Server started on port '+PORT));