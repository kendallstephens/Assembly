require("dotenv").config();

module.exports = {
  env: {
    NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  }
};

const withImages = require('next-images')
module.exports = withImages({})