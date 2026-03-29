const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ DB Error:', err));

// Basic Route
app.get('/', (req, res) => res.send('API is running...'));

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
