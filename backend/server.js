require('dotenv').config();
const dataRouter = require("./routes/api")
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const zalupa ={ 
  zalupa: "zalupa",
} 

app.use(cors());

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    res.json(zalupa);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 

app.use(dataRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});