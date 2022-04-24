const express = require('express');
const router = express.Router();

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

router.post('/addStock', (req, res) => {
    res.end('NA');
});

module.exports = router;