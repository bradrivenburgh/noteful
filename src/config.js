// Can't get dotenv ES6 import / export statements to work;
// Using CommonJS instead

module.exports = {
  API_URL: process.env.API_URL || 'http://localhost:8000/api/noteful',
}