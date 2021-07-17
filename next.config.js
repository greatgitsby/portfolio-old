module.exports = {
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "https://treymoen.dev/"
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}
