import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoute from './route/post.js'
import userRoute from './route/user.js'


const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoute);
app.use('/user', userRoute);

const CONNECTION_URL = "mongodb://localhost:27017/memories"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
).catch(
    (Error) => console.log(Error.message)
);

mongoose.set('useFindAndModify', false);



