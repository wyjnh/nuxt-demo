# nuxt-demo

> My prime Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
## 目录结构
1. assets 用于组织未编译的静态资源 如 LESS、SASS 或 JavaScript
2. 组件目录 components  组件没有像页面组件那样有 asyncData 方法的特性 
3. 布局目录 layouts
4. middleware
5. 页面目录 pages
6. 插件目录 plugins 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
7. 静态文件目录 static 此类文件不会被 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径/下。
8. store
9. nuxt.config.js 
10. package.json  
11. 别名	~ 或 @	srcDir           ~~ 或 @@	rootDir
eg: 需要引入 assets 或者 static 目录, 使用 ~/assets/your_image.png 和 ~/static/your_image.png方式

## 配置  未完成

## 路由
1. 在pages 下面直接创建页面文件夹就行 name是文件夹名字
```html
<nuxt-link :to="{name:'index'}">HOME</nuxt-link>
```
2. 路由全局过渡效果
3. 自定义过渡特效
4. 中间件 (权限验证)
   定义一个自定义函数运行在一个页面或一组页面渲染之前。
   可以异步获取数据

## view
### 布局 layout
1. 自定义布局 
2. 自定义错误页面

### 页面 pages
特殊的配置 | 
---- | ---
asyncData | 异步数据处理，该方法的第一个参数为当前页面组件的 上下文对象。
fetch	| 渲染页面前获取数据store 不会设置组件的数据
head	| 配置当前页面的 Meta 标签
layout | 指定当前页面使用的布局（layouts 根目录下的布局文件
loading	| 如果设置为false，则阻止页面自动调用this.$nuxt.$loading.finish()和this.$nuxt.$loading.start(),您可以手动控制它
transition | 指定页面切换的过渡动效
scrollToTop	| 布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
validate |	校验方法用于校验 动态路由的参数。
middleware | 指定页面的中间件，中间件会在页面渲染之前被调用

