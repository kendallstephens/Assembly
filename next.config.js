require("dotenv").config();

module.exports = {
  env: {
    PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY
  }
};

const withImages = require('next-images')
module.exports = withImages({})