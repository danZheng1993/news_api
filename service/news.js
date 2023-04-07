const env = require('dotenv').config()
const queryString = require('querystring');

const BASE_URL = env.parsed.NEWS_BASE_URL;
const API_KEY = env.parsed.NEWS_API_KEY;

function searchNews(query) {
  const parsedQuery = queryString.stringify({
    ...query,
    apikey: API_KEY
  });
  return fetch(`${BASE_URL}search?${parsedQuery}`).then(res => res.json())
}

function fetchHeadlines(query) {
  const parsedQuery = queryString.stringify({
    ...query,
    apikey: API_KEY
  })
  return fetch(`${BASE_URL}top-headlines?${parsedQuery}`).then(res => res.json())
}

module.exports = {
  searchNews,
  fetchHeadlines
}