const fetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function () {
  const key = process.env.LASTFM_KEY;
  const user = process.env.LASTFM_USER;
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${user}&api_key=${key}&limit=8&format=json&period=7day`
  const res = fetch(url, {
    duration: '1h',
    type: 'json',
  })
  const albums = await res
  return albums.topalbums.album
}