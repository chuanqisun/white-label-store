const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pages = [
  { bundleName: 'cart', entry: './pages/cart.jsx', template: './templates/default.html' },
  { bundleName: 'category', entry: './pages/category.jsx', template: './templates/default.html' },
  { bundleName: 'checkout', entry: './pages/checkout.jsx', template: './templates/default.html' },
  { bundleName: 'home', entry: './pages/home.jsx', template: './templates/default.html' },
  { bundleName: 'product', entry: './pages/product.jsx', template: './templates/default.html' },
  { bundleName: 'style-guide', entry: './pages/style-guide.jsx', template: './templates/default.html' },
  { bundleName: 'embed-host', entry: './pages/embed-host.jsx', template: './templates/default.html' },
];

const pageEntries = pages.reduce((obj, page) => {
  obj[page.bundleName] = page.entry;
  return obj;
}, {});

const htmlWebpackPlugins = pages.map(
  page =>
    new HtmlWebpackPlugin({
      chunks: [page.bundleName],
      filename: `${page.bundleName}.html`,
      template: page.template,
    })
);

module.exports = {
  entry: { ...pageEntries },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          enforce: true,
          filename: 'vendor.[chunkhash].js',
          name: false,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin(), ...htmlWebpackPlugins],
};
