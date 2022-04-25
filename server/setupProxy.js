const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/', {
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};
app.listen(3000);