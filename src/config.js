let API_ENDPOINT = "";

(process.env.NODE_ENV === 'development')
  ? API_ENDPOINT = "http://localhost:8000/api/noteful"
  : API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export default {
  API_ENDPOINT,
  API_KEY: process.env.REACT_APP_API_KEY
}