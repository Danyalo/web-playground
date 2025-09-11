const fetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    let user = process.env.FAH_USERNAME;
    console.log(user);
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