const path = require('path');
module.exports = {
 entry: path.resolve(__dirname, './src/index.js'),
 output: {
   filename: 'bundle.js',
   path: path.resolve(__dirname, 'dist'),

 },
 module: {
   rules: [
     {
       test: '.less',
       use:[{
         loader: 'style-loader'
       },
       {
         loader: 'css-loader'
       },
       {
         loader: 'less-loader'
       }
      ]
     }
   ]
 },
 plugin: {},
 
}