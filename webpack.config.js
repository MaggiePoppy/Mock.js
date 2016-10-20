const fs = require('fs')
const path = require('path')

const webpack = require('webpack')
// var extractTextPlugin = require('extract-text-webpack-plugin')  // 独立打包样式文件

var srcPath = path.resolve(__dirname, 'pages')
var distPath = path.resolve(__dirname, 'dist')

console.log('正在进行webpack编译...');

// 创建入口文件集合对象
function makeEntry() {
  var entrys = {}
  var pages = fs.readdirSync(srcPath)

  pages.forEach(function(page) {
    if (page) {
      entrys[page] = path.resolve(srcPath, page, 'index.js')
    }
  })

  return entrys
}

module.exports = {
  entry: makeEntry(),
  output: {
    path: distPath,
    filename: '[name]/bundle.js'
    // publicPath: "/assets/"
  },

  externals: {
    // 'jquery': 'jQuery'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url',
        query: {
          limit: 8192
        }
      }
    ],
    noParse: [
      // 不希望webpack处理的模块的正则表达式
    ]
  },
  resolve: {
    // root: srcPath,  //绝对路径
    // extensions: ['', '.js', '.json', '.scss'],
    alias: {
      // 模块映射表
      util: path.resolve(__dirname, 'util')
    }
  },

  // babel使用的插件
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  plugins: [
    // 热替换插件，不需要浏览器自动刷新就可以更新页面内容
    new webpack.HotModuleReplacementPlugin(),

    // 抽取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',  // chunkname
      filename: 'js/common.js',  // 输出文件名
      minChunks: 3,  // 至少被2个以上的模块引用才会被抽取为公共模块,
      chunks: makeEntry()
    })

    // // 单独提取样式文件
    // new extractTextPlugin('[name].css')
  ],

  // webpack-dev-server 配置
  devServer: {
    // publicPath: "/assets/",
    stats: { colors: true },
    port: 8080,
    // contentBase: './dist',

    // 本地js修改后，浏览器自动刷新页面
    inline: true,

    // 热启动，需要配合HotModuleReplacementPlugin插件使用
    hot: true
  }
}