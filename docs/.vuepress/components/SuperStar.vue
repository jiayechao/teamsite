<template>
  <div class="super-star">
    <el-row :gutter="30">
      <el-col class="star-wrap" :sm="24" :md="8" v-for="(item, index) in stars" :key="index">
        <a class="star-item" :href="item.url" target="_blank">
          <div class="info">
            <img class="avatar" :src="item.avatar" alt="">
            <p class="name">{{ item.name }}</p>
          </div>
          <p class="desc">{{ item.desc }}</p>
        </a>
      </el-col>
    </el-row>
    <div class="more-wrap">
      <a class="btn" href="">更多明星</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    stars() {
      return this.$frontmatter.stars
    }
  },
}
</script>

<style lang="styl" scoped>
.super-star
  margin 0 auto 40px
  @media (min-width: $minWidth3)
    width $width3
  @media (min-width: $minWidth2)
    width $width2
  @media (min-width: $minWidth1)
    width $width1
  .star-item
    display flex
    position relative
    flex-direction column
    border-radius 4px
    transition all 0.3s
    text-align center
    overflow hidden
    margin-bottom 15px
    border 1px solid #e4ecf3
    background-color #f5f8fa
    &:hover
      box-shadow 0 26px 40px -24px rgba(0,36,100,.5)
      transform translate3d(0, -6px, 10px)
    .info 
      padding 20px 10px
    .avatar
      height 120px
      width 120px
      border-radius 50%
    .name
      font-size 18px
      color #494d55
      margin-top 20px
      padding 0 20px
      margin-bottom 10px
    .desc
      background-color #fff
      color #919191
      line-height 60px
      height 60px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      padding 0 20px
</style>