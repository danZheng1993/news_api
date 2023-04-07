const express = require('express');
const {searchNews, fetchHeadlines} = require('../service/news');
const { validateQuery } = require('../utils/query');

const router = express.Router();

/* GET news listing. */
router.get('/search', async function(req, res, next) {
  try {
    validateQuery(req.query)
    const result = await searchNews(req.query)
    if (!result.errors) {
      res.json(result)
    } else {
      res.status(500).send(result.errors);
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
});

router.get('/headlines', async function(req, res, next) {
  try {
    validateQuery(req.query)
    const result = await fetchHeadlines(req.query)
    if (!result.errors) {
      res.json(result)
    } else {
      res.status(500).send(result.errors);
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

module.exports = router;
