const express = require('express');
const queryString = require('querystring');
const {fetchNews} = require('../service/news');

const router = express.Router();

/* GET news listing. */
router.get('/', async function(req, res, next) {
  try {
    const result = await fetchNews(req.query)
    res.json(result)
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
