<template>
  <div class="navbar">
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <div class="nav-list">
      <a class="nav-item" v-for="(nav, index) in navData" :key="index" :href="nav.link">{{ nav.text }}</a>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      site: this.$site
    }
  },
  computed: {
    navData() {
      return this.$themeConfig.nav
    },
    logo() {
      return this.$themeConfig.logo
    }
  },
}
</script>

<style lang="stylus" scoped>
.navbar
  height 60px
  
</style>