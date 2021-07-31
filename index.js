const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('./src/database');
// const path = require('path');
// const routes = require('./routes');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const config = require('./src/config');



app.use(cors());
app.use(express.json());
app.use(bodyParser());
app.use(helmet());

app.use(routes);
mongoose.connect();
 

// app.use('/api', routes);

app.listen(process.env.PORT, console.log(' ** API is running **'));