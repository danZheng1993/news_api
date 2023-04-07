const env = require('dotenv').config()
const queryString = require('querystring');

const BASE_URL = env.parsed.NEWS_BASE_URL;
const API_KEY = env.parsed.NEWS_API_KEY;

function fetchNews({ keyword, lang, country }) {
  const query = queryString.stringify({
    q: keyword,
    lang,
    country,
    apikey: API_KEY
  });
  return fetch(`${BASE_URL}?${query}`).then(res => res.json())
}

module.exports = {
  fetchNews
}