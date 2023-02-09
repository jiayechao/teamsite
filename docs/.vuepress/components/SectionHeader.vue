<template>
  <div class="section-header">
    <h3 class="title">{{ title }}</h3>
    <p class="sub-title">{{ subTitle }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    }
  },
}
</script>
<style lang="styl" scoped>
.section-header
  margin-top 20px
  margin-bottom 10px
  color #494d55
  text-align center
  .title
    font-size 30px
    line-height 45px
    font-weight 500
  .sub-title
    font-size 16px
    color #919191
    line-height 45px

</style>