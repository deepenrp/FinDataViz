const masterMockData = require("./data.json");

// console.log(masterMockData);

function marketDataFunction() {
    const mockMarketData = masterMockData;
    console.log(mockMarketData);
    return mockMarketData;
}

module.exports = {
    marketDataFunction
};