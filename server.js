const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const trainerRouter = require('./routes/trainer');
const userRouter = require('./routes/user');
const sessionRouter = require('./routes/session');

app.use('/trainer', trainerRouter);
app.use('/user', userRouter);
app.use('/session', sessionRouter);

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});