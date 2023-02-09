<template>
  <div class="blog-pre">
  <el-row :gutter="30">
    <el-col :sm="24" :md="12">
      <div class="panel-wrap blog-lastest">
        <div class="panel-label">
          <span class="text">最新博客</span>
          <a alt="博客" href="/" class="more">...</a>
        </div>
        <ul class="blog-list">
          <li class="blog-item">
            <a href="">
              <span class="title">5分钟上手AI平台</span>
              <span class="author">tony</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="title">5分钟上手AI平台</span>
              <span class="author">tony</span>
            </a>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="panel-wrap blog-classifier">
        <div class="panel-label">
          <span class="text">博客分类</span>
          <a alt="博客" href="/" class="more">...</a>
        </div>
        <ul class="classifier-list">
          <li>
            <img class="logo" src="" alt="">
            <div>
              <p class="text">css</p>
              <p class="desc">好玩的黑科技</p>
            </div>
            
          </li>
          <li>
            <img class="logo" src="" alt="">
            <div>
              <p class="title">js</p>
              <p class="author">宇宙最好的语言</p>
            </div>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {}
</script>

<style lang="styl" scoped>
.blog-pre
  margin 0 auto 40px
  @media (min-width: $minWidth3)
    width $width3
  @media (min-width: $minWidth2)
    width $width2
  @media (min-width: $minWidth1)
    width $width1
.panel-wrap
  border 1px solid #e4ecf3
  background-color #fff
  border-radius 4px
  min-height 325px
  margin-bottom 10px
  .panel-label
    font-size 16px
    color #616161
    border-bottom 1px solid #f5f5f5
    padding 15px 0
    margin 0 10px
    position relative
    z-index 1
    .more
      cursor pointer
      position absolute
      right 0
      top 15px
      font-weight bold
  .blog-list
    margin-left 15px
    margin-top 15px
    font-size 16px
  .blog-item
    margin-bottom 35px
</style>