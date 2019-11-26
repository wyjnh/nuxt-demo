<template>
    <div>
    <h3>home</h3>
    <ul>
      <li>
        <nuxt-link :to="{name:'index'}">index</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    // 自定义布局
    layout:'mylayout',
    // 自定义路由过渡效果
    transition:'test',
    // 路由中间件
    middleware: 'home'
}
</script>