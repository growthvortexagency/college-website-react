const express = require('express');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const applyRoutes = require('./routes/applyRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api', applyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
