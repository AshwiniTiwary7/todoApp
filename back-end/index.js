const express = require('express');
const app = express();
require('dotenv').config();
const route = require('./routes/routes');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/api/v1',route);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`APP IS RUNNING AT ${PORT}`)
})
