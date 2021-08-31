module.exports = {
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "https://treymoen.com/"
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  }
}
