const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();

//static middleware to make use of the public directory
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
