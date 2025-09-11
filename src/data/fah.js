const fetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {
    let user = process.env.FAH_USERNAME;
    let url = `https://api.foldingathome.org/user/${user}`;
  
    try {
      let json = await fetch(url, {
        duration: "1d",
        type: "json",
      });
      return json;
    } catch (error) {
      console.error(`Fetch failed in fah.js. ${error}`);
    }
  };