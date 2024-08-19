const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const scrapeRoute = require('./routes/scrape');
const globals = require('./globals');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(express.static('public'));

let dbURI = '';

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to set the MongoDB URI
app.post('/set-uri', (req, res) => {
    dbURI = req.body.uri;
    globals.setGB(dbURI);

    if (globals.getGB()) {
        connectToDB(globals.getGB());
        res.status(200).send({ message: 'URI set successfully' });
    } else {
        res.status(500).send({ message: 'Failed to set URI' });
    }
});

// Function to connect to MongoDB
function connectToDB(uri) {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(error => {
        console.log('Error connecting to MongoDB:', error.message);
    });
}

// Include the scrape route
app.use('/api', scrapeRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
