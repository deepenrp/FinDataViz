const express = require('express');
const router = express.Router();
const {marketDataFunction} = require('../data/marketData.js');

const PORT = 4000; // backend routing port
router.get('/', (req, res) => {
    res.end(`Server is running on port ${PORT}.`);
});

router.get('/stock', (req, res) => {
    const mockData = [
        {
            "stock": "CSCO",
            "price": "56.32"
        },
        {
            "stock": "MSFT",
            "price": "132.32"
        },
        {
            "stock": "AAPL",
            "price": "345.56"
        }
    ];
    res.end(JSON.stringify(mockData));
});

router.get('/market', (req, res) => {
    const sentMockMarketData = marketDataFunction();
    console.log("ON SERVER");
    console.log(sentMockMarketData);
    res.end(JSON.stringify(sentMockMarketData));
});

router.get('/correlations', (req, res) => {
    const mockCorrData = 
        {
            "beta": 2.5,
            "pe": 56.32,
            "atr" : 5
        };
    console.log(mockCorrData);
    res.end(JSON.stringify(mockCorrData));
});


module.exports = router;