#第一部分

##自己写的webpack。
    1.这一部分利用webpack与webpack—cli进行项目的打包
        1.1 webpack的打包原理是将src中的资源打包到dist中的bundle.js，一开始没有定义webpack.config.js时，需要键入
            webpack  打包前的位置 -o  打包后的位置。
        1.2 为了实现自动化，在webpack.config.js中定义了module.export对象。此时只要在终端键入webpack就
            能进行打包。
        1.3 进一步实现自动化，则需要借助 webpack-dev-server，它能够生成一个服务器，并且需要在package.json
            中的scripts中写入dev：webpack-dev-server 键值对。此后就能通过npm进行运行，并且是运行在端口。
            此时，通过webpack-dev-server打包的，生成的js是存放在内存中的，于是在index.html中的script必须改为/bundle.js。
        1.4 也可以利用html-weback-plugin插件，将生成完的bundle.js自动添加到index.html中，于是在index.html中可以自己
            不写script，因为默认他会通过这个插件，将内存中的bundle.js在打包后，放入index.html的尾部。

    2.webpack.config.js的exports具有如下结构：
        2.1 entry--打包入口
        2.2 output--打包出口
        2.3 plugins--插件
        2.4 mode--设置模式
        2.5 module--设置第三方loader加载器
    