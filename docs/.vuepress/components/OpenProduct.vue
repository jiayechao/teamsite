<template>
  <div class="open-product">
    <el-row :gutter="30">
      <el-col class="product-wrap" :xs="24" :sm="12" :md="6" v-for="(item, index) in products" :key="index">
        <a :style="{backgroundColor: item.bgColor}" class="product-item" :href="item.url" target="_blank">
          <img class="logo" :src="$withBase(item.logo)" alt="">
          <span class="title">{{ item.title }}</span>
          <span class="sub-title">{{ item.subTitle }}</span>
          <div class="light"></div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$frontmatter.products
    }
  },
}
</script>

<style lang="styl" scoped>
.open-product
  margin 0 auto
  @media (min-width: $minWidth3)
    width $width3
  @media (min-width: $minWidth2)
    width $width2
  @media (min-width: $minWidth1)
    width $width1
  .product-item
    display flex
    position relative
    flex-direction column
    border-radius 4px
    padding 20px 10px
    transition all 0.3s
    text-align center
    overflow hidden
    margin-bottom 10px
    &:hover
      box-shadow 0 26px 40px -24px rgba(0,36,100,.5)
      transform translate3d(0, -6px, 10px)
      .light
        transition: all .3s ease;
        left: 100%;
    .logo
      height 60px
    .title
      font-size 24px
      color #fff
      margin-top 20px
      margin-bottom 10px
    .sub-title
      padding 0 20px
      font-size 14px
      color #fff
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom 10px
    .light
      cursor pointer
      position absolute
      left -100%
      top 0
      width 100%
      height 100%
      background-image: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5),hsla(0,0%,100%,0))
      transform skewx(-25deg)
</style>