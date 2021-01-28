const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8086,
    lazy: true,
    liveReload: true,
    filename: 'index.html'
  },
  module: {
    rules: [
      {
        test: [/\.tsx?$/, /\.ts?$/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            },
          },
        ],
        exclude: /node_modules/
      },
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=app/images/[name].[ext]"},
    ]
  },
  optimization: {
    runtimeChunk: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
