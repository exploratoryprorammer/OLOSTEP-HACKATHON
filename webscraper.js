const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const url = "https://projects.fivethirtyeight.com/polls/"

const scrape = (url) => {
    axios.get(url)
        .then(response => {
            const $ = cheerio.load(response.data);
            const data = pretty($.html());
            console.log(data);
        })
        .catch(error => {
            console.log(error)
        });

}

scrape(url);