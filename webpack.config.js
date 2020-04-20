const path =require('path')

const htmlwebpackplugin=require('html-webpack-plugin')
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },

    plugins:[ 
        new htmlwebpackplugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
        

    ],

    mode:'development',

    module:{  //用于配置所以第三方加载器
        rules:[{test:/\.css$/,use:['style-loader','css-loader']}]
    }
}