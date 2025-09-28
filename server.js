const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ung-dung';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection to the database was successful!');
}).catch(err => {
  console.error('Connection to the database failed:', err);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});