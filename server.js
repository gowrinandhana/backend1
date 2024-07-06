const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, email, password } = req.body;

  
  const dummyUser = {
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123'
  };

  if (
    username === dummyUser.username &&
    email === dummyUser.email &&
    password === dummyUser.password
  ) {
    res.status(200).json({ message: 'Login successful', user: dummyUser });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
