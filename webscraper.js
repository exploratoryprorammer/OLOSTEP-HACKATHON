const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const mongoose = require('mongoose');

const url = "https://projects.fivethirtyeight.com/polls/"
const uri = "'mongodb+srv://rohanksah:2Y91bRjOHFEfC8QU@538scraper.mhcla.mongodb.net/'"


const connectdb = () => {
    mongoose.connect('mongodb://localhost:27017/scraper', {
    }).then(() => {
        console.log('Connected to DB')
    }).catch(error => {
        console.log(error)
    })
}

const scrape = (url) => {
    axios.get(url)
        .then(response => {
            const $ = cheerio.load(response.data);
            const data = pretty($.text());
            console.log(data);
        })
        .catch(error => {
            console.log(error)
        });

}

//scrape(url);
connectdb()