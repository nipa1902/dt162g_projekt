const express = require('express');
const cors = require('cors');

const app = express();

// CORS
app.use(cors());
app.use(express.json());

// JSON prettifier
app.set('json spaces', 2)

// Posts variable which sets up routing
const posts = require('./routes/api/posts');

// Re-direct any posts through the variable
app.use('/api/posts', posts);

// Listen for heroku port, or just use port 3000 for local 
const port = process.env.PORT || 3000;

// Basic startup behaviour
app.listen(port, () => console.log('Server started on port ' + port));
