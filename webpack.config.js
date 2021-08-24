const HTMLwebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry: './src/script.js',
    output:{
        path:__dirname+'/dist',
        filename: 'bundle.js'
    },
    Plugin: [
        new HTMLwebpackPlugin()
    ]

}