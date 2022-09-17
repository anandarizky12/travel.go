module.exports = {
  reactStrictMode: true,
  env:{
    NEXT_API: process.env.NEXT_API
  }
}

module.exports = {
  async rewrites() {
    return [
      {
        // type: LOAD_ARTICLES,
        source: '/api/:slug*',
        destination: 'http://localhost:5000/api/:slug*', // Proxy to Backend
       
      }
    ]
  }
}