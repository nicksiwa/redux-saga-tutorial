export const conf = {
  BASE_API_URL: process.env.NODE_ENV === 'development' ?
    'https://jsonplaceholder.typicode.com'
    :
    null
}
