const createProxyMiddleware = require('http-proxy-middleware')

export default function(app: any) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000/',
      changeOrigin: true,
    })
  );
};