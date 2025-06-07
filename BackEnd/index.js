const express = require('express');
const app = express();
const PORT = 3000;


const apiRoutes = require('./routes/apiRoutes');


// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});



app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
