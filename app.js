require('dotenv').config();
const express = require('express');
const connectDB = require('./src/db/conn.js');
const cors = require('cors');
const leadRouter = require('./src/routes/leads.routes.js');
const mongoose = require('mongoose');
const Leads = require('./src/models/leadsModel.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect to the MongoDB database
connectDB()
  .then(() => {
    // For Checking Response
    // const newLead = new Leads({
    //   leadName: 'John Doe',
    //   leadEmail: 'john.doe@example.com',
    //   leadWhatsAppNumber: '+1234567890',
    // });

    // newLead
    //   .save()
    //   .then(() => console.log('New lead created successfully!'), newLead)
    //   .catch((err) => console.error('Error creating lead:', err));
    // console.log('New lead created successfully:', newLead);

    // const collectionName = Leads.collection.name;
    // const dbName = mongoose.connection.name;
    // console.log('Collection name:', collectionName, dbName);

    app.get('/', (req, res) => {
      res.send(`Hello from ${port} localhost`);
    });

    console.log('Connected to the database');

    //* Create A new Lead
    app.use('/api/leads', leadRouter);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with a failure code
  });
