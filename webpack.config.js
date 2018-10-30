const path = require('path')
// 引用htmlwebpackplugin页面中不需要手动引用bundle.js
// 自动创建script 并引用bundle.jd
const htmlWebpackPlugin = require("html-webpack-plugin")

const { VueLoaderPlugin } = require('vue-loader')

// 配置文件
module.exports = {
    // 入口路径
    entry:path.join(__dirname,"./src/main"),
    // 出口配置
    output:{
        // 输出路径
        path:path.join(__dirname,'./dist'),
        // 输出名称
        filename:'bundle.js'
    },
    mode: 'development',
    plugins:[//配置插件的节点
        new htmlWebpackPlugin({//创建一个在内存中生成的html 页面插件
            template:path.join(__dirname,"./src/index.html"),//指定模板页面
            filename:"index.html"//指定页面的名称
        }),
         new VueLoaderPlugin()
    ],
    module:{
        rules:[//第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader','css-loader']},//处理css样式
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},//处理less样式
            {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},//处理scss样式
            {test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=18033&name=[hash:8]-[name].[ext]'},//处理图片路径
            // limit给定的值时图片的大小，单位字节，图片大于给定的limit值，则会不会被转成base64格式的字符串，
            // 否则会被转成base64的字符串
            {test:/\.(ttf|eot|svg|woff|woff2)$/, use:"url-loader"},//处理字体格式的路径
            {test:/\.js$/, use:'babel-loader', exclude:/node_modules/},//配置babel转换es高级语法
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve:{
        alias:{
            "vue$": "vue/dist/vue.js"
        }
    }
}