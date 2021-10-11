/*
 * @Author: ryyyyy
 * @Date: 2021-09-20 21:22:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-11 19:50:32
 * @Description: Do not edit
 * @FilePath: /components/webpack.config.js
 */
const path = require("path");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//对于有错的ts，生产环境会报错，不会直接通过。（如果不加这个插件，ts只会在编译期间提示错误，但是打包仍然能成功）
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    filename: `js/[name].[hash:8].js`,
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [ ".tsx" , ".ts", ".js", ".jsx", ".json"],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true, //再次编译时只编译修改过的文件
            },
          },
        ],
      }, 
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //文件名称
      filename: "index.html",
      //防止循环引用
      chunksSortMode: "none",
      // 指定生成的html文件依赖的模板
      template: path.join(__dirname, "src", "app.html"),
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, './tsconfig.json'),
      },
    })
  ],
  devServer: {
    open: true,
    port: 3178,
  },
  devtool: isDev ? 'eval-source-map' : false
};
