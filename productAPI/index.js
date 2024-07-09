const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$20' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: '$30' },
  // Add more products as needed
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product API listening at http://localhost:${port}`);
});
