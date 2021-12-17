let apiUrl
const apiUrls = {
  // your production api url
  production: 'https://immense-badlands-54158.herokuapp.com',
  // your development api url
  development: 'http://localhost:4000'
}

// check if development or production
if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

// export api url
export default apiUrl