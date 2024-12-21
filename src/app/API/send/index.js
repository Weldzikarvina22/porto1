const express = require('express');
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint Root
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from API!' });
});

// Endpoint GET /users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  res.status(200).json(users);
});

// Endpoint POST /users
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User added', user: newUser });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
