const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ClientForm = require('./model/ClientForm');
// const { v4: uuidv4 } = require('uuid');

const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());


const dbURI = 'mongodb://127.0.0.1:27017/Agency';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.post('/api/submit-form', async (req, res) => {

  try {
    // const clientId = uuidv4();
   let clientId = generateClientId();

  //   // Check if clientId already exists
    while (await ClientForm.findOne({ clientId: clientId })) {
      clientId = generateClientId();
    }

    const client = new ClientForm({
      ...req.body,
      clientId: clientId,
  });

    await client.save();
    console.log(client);
    res.status(200).json({ message: 'Form submitted successfully'});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});


// Function to generate a unique applicationId
let clientIdCounter = 1;

function generateClientId() {
    const newClientId = `@AGCY${clientIdCounter}`;
    clientIdCounter++;
    return newClientId;
}



app.get('/getAllUser', async (req, res) => {
  try {
    const allUser = await ClientForm.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});