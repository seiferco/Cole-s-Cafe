const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // allow frontend requests
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));