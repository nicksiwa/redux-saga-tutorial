export const conf = {
  BASE_API_URL: process.env.NODE_ENV === 'development' ?
    'http://localhost:5000'
    :
    null
}
