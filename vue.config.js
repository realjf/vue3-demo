module.exports = {
    devServer: {
        open: true,
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/api': {
                target: 'http://imissu.herokuapp.com/api/',
                ws: true,
                changOrigin: true, // 允许跨域
                pathRewrite: {
                    // 重写路径
                    '^/api': ''
                }
            }
        },
        before: app => { }
    }  
}