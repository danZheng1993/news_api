const { AVAILABLE_CATEGORIES, AVAILABLE_COUNTRIES, AVAILABLE_LANGUAGES } = require('../constants/requestVariables')

const validateQuery = (query) => {
  if (query.category && !AVAILABLE_CATEGORIES.includes(query.category)) {
    throw new Error('Requested Category is not available yet.');
  }
  if (query.country && !AVAILABLE_COUNTRIES.includes(query.country)) {
    throw new Error('Service is not available in requested country yet.');
  }
  if (query.lang && !AVAILABLE_LANGUAGES.includes(query.lang)) {
    throw new Error('Requested Language is not supported yet');
  }
}

module.exports = {
  validateQuery
}