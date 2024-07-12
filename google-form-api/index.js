const express = require('express');
const {Web3} = require('web3');
const dotenv = require('dotenv');
const GoogleFormArtifact = require('../build/contracts/GoogleForm.json');
const path = require('path');
dotenv.config();


const contractABI = GoogleFormArtifact.abi; 

const app = express();
app.use(express.json());


const web3 = new Web3(process.env.INFURA_URL);

const GoogleForm = new web3.eth.Contract(contractABI, process.env.CONTRACT_ADDRESS); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html')); // Use path.join for absolute path
});


// Endpoint to submit form
app.post('/submit', async (req, res) => {
  try {
    const { name, usn, phone, email, from } = req.query; 
    const result = await GoogleForm.methods.submitForm(name, usn, phone, email).send({ from, gas: 11111111,gasPrice:675800116});
    res.status(200).send({ message: 'Form submitted successfully', });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

// Endpoint to get entries
app.get('/entries', async (req, res) => {
  try {
    const { from } = req.query;
    const entries = await GoogleForm.methods.getEntries().call({ from });
    res.status(200).send(entries);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});