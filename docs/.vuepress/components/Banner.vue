<template>
  <el-carousel class="banner" trigger="click" height="500px" arrow="never" @change="change">
      <el-carousel-item v-for="(item, index) in bannerData" :key="index">
        <div class="banner-item" :style="{backgroundImage: 'url(' + $withBase(item.img) + ')'}">
          <a v-if="active === index" class="banner-info" :href="item.url" target="_blank">
            <p class="wow title" :class="item.type === 'lr' ? 'fadeInRight' : 'fadeInDown'">{{ item.title }}</p>
            <p class="wow sub-title" :class="item.type === 'lr' ? 'fadeInLeft' : 'fadeInUp'">{{ item.subTitle }}</p>
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    bannerData() {
      return this.$frontmatter.banner
    }
  },
  methods: {
    // 切换动画
    change(i1)  {
      this.active = i1
    }
  }
}
</script>
<style lang="styl">
  .banner
    height 500px
    .banner-item
      height 500px
      background-size cover
      background-position center
    .banner-info
      display block
      height 100%
      padding-top 180px
      box-sizing border-box
    .title
      text-align center
      color #fff
      font-size 70px
      padding 0 40px 20px
      &.fadeInRight
        text-align right
    .sub-title
      text-align center
      color #fff
      font-size 40px
      padding 0 40px
      &.fadeInLeft
        text-align left
</style>