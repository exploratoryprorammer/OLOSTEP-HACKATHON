const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const scrapeRoute = require('./routes/scrape');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    uri: process.env.MONGO_DB_URI
    
}


const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_DB_URI, {

}).then(() => {
    console.log('Connected to DB');
}).catch(error => {
    console.log(error);
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/api', scrapeRoute);  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
