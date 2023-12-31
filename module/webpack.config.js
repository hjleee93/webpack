const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:[
          { loader:'style-loader',
          options:{
            injectType:'singletonStyleTag'
          }
        },
          {
          loader:'css-loader',
          options:{
            modules:true
            
          }
          }
        ]
      }
    ]

  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/template.html'
    })
  ],
  target: 'node'
}