const withLess = require('next-with-less');

module.exports = withLess({
  reactStrictMode: true,
  swcMinify: true,
  lessLoaderOptions: {
    lessOptions: {},
  },
  images: {
    domains: ['images.pokemontcg.io'],
  },
});
