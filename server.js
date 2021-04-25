import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import dotenv from 'dotenv';
import routesUrls from './routes.js'
import cors from 'cors';
const router = express.Router();
import signUpTemplate from './SignupModels.js'


// app config

const app = express();
const port = process.env.PORT || 8001;
dotenv.config()


// middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_ACCESS, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    
    console.log("Database connected")
    
})


app.use('./api', routesUrls)



//  API Endpoints
app.get('/', (req, res) => {
    res.status(200).send("hello");
});


app.get('/blogs', (req, res) => {
    signUpTemplate.find({}).then((blogs) => {
        res.send(blogs);
    }).catch((error) => {
        res.status(500).send(error);
    })
});



// listensers
app.listen(port, () => {
    console.log(`lilstening on port ${port}`);
})
















