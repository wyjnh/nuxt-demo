export default function (context) {
    console.log('全局的路由中间件 auth')
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}