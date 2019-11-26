<template>
  <div class="container">
    <div>
      <h3 class="title">
        nuxt-demo
      </h3>
      <ul>
        <li>
          <nuxt-link :to="{name:'index'}">Index</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{name:'home'}">Home</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link :to="{name:'news'}">NEWS</nuxt-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    // Logo
  }
}
</script>