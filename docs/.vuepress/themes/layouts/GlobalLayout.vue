<template>
  <div id="global-layout">
    <header>
      <Navbar />
    </header>
    <component :is="layout"/>
    <footer><h1>Footer</h1></footer>
  </div>
</template>

<script>
import Navbar from '../global-components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>