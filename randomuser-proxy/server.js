const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=25');
    if (response.status !== 200) {
      throw new Error('Failed to fetch data from RandomUser API');
    }
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from RandomUser API:', error.message);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', message: 'Endpoint does not exist' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
