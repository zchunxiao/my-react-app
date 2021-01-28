const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/ruban', {
            "target": "https://apigw.myzebravip.com",
            "changeOrigin": true
        })
    );
    app.use(
        createProxyMiddleware('/api', {
            "target": "https://trade.yizhitongapp.com",
            "changeOrigin": true,
            "pathRewrite": {
                '^api' : ''
            }
        })
    );
    app.use(
        createProxyMiddleware('/user-customer-web', {
            "target": "https://apigw.myzebravip.com",
            "changeOrigin": true,
            "pathRewrite": {
                '^user-customer-web' : ''
            }
        })
    );
   
}