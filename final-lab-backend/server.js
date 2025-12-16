// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// app.get('/api/rooms', (req, res) => {
//   res.json([
//     { name: "Deluxe Room", price: 120 },
//     { name: "Executive Suite", price: 200 },
//     { name: "Family Apartment", price: 180 }
//   ]);
// });

// app.listen(4000, () => {
//   console.log("Backend running at http://localhost:4000");
// });

// server.js
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// // Root route to verify server is running
// app.get('/', (req, res) => {
//   res.send('Backend is running. Use /api/rooms to get room data.');
// });

// // API route to return rooms data
// app.get('/api/rooms', (req, res) => {
//   res.json([
//     { name: "Deluxe Room", price: 120 },
//     { name: "Executive Suite", price: 200 },
//     { name: "Family Apartment", price: 180 }
//   ]);
// });

// // Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });


// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is running. Use /api/rooms to get room data.');
});

app.get('/api/rooms', (req, res) => {
  res.json([
    { name: "Deluxe Room", price: 120 },
    { name: "Executive Suite", price: 200 },
    { name: "Family Apartment", price: 180 }
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
