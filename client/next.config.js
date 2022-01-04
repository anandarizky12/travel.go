module.exports = {
  reactStrictMode: true,

}

module.exports = {
  async rewrites() {
    return [
      {
        // type: LOAD_ARTICLES,
        source: '/api/:slug*',
        destination: 'https://travalgo-me.herokuapp.com/api/:slug*', // Proxy to Backend
      }
    ]
  }
}