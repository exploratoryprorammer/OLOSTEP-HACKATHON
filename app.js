const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const scrapeRoute = require('./routes/scrape');

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect('mongodb+srv://rohanksah:2Y91bRjOHFEfC8QU@538scraper.mhcla.mongodb.net/', {
}).then(() => {
    console.log('Connected to DB')
}).catch(error => {
    console.log(error)
});



app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome');
});

// Ensure this is correctly using a middleware function
app.use('/api', scrapeRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
