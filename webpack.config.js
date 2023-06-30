const path = require('path')
const outputDir = path.resolve(__dirname, 'js')
const inputDir = path.resolve(__dirname, 'ts')

module.exports = {
  mode: 'production',
  experiments: {
    topLevelAwait: true
  },
  entry: {
    index: path.join(inputDir, 'index.ts'),
    myMap: path.join(inputDir, 'myMap.ts')
  },
  output: {
    path: outputDir,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
