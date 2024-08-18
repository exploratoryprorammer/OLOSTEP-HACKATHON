const express = require('express');
const puppeteer = require('puppeteer');
const DataModel = require('../models/data'); 
const global = require('../globals');

const router = express.Router();

router.post('/scrape', async (req, res) => {
    const { url } = req.body;
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const data = await page.evaluate(() => document.body.innerText);
        await browser.close();

        const category = await analyzeData(data);

        const newData = new DataModel({ url, data, category });
        await newData.save();

        res.json({ success: true, data, category });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

async function analyzeData(data) {
    return "Too be done categories";
}

module.exports = router;
