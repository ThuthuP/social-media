
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/users');
const statusRoutes = require('./routes/statuses');
const messageRoutes = require('./routes/messages');
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/connectnest', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/users', userRoutes);
app.use('/api/status', statusRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
