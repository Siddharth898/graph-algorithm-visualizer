const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const gridRoutes = require('./routes/gridRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/grids', gridRoutes);

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
    })
    .catch(err => console.log(err));
