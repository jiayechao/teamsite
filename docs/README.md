---
home: true
heroText: null
tagline: null
banner: [
  {
    img: '/imgs/banner/banner1.jpg',
    title: '广研智能中心',
    subTitle: '致敬不平凡的你',
    url: '',
  },
  {
    img: '/imgs/banner/banner2.jpg',
    title: '广研智能中心',
    subTitle: '致敬不平凡的你',
    url: '',
    type: 'bt' # 默认
  },
  {
    img: '/imgs/banner/banner3.jpg',
    title: '广研智能中心',
    subTitle: '致敬不平凡的你',
    url: '',
    type: 'lr' # 适合长文本
  }
]
products: [
  {
    logo: '/imgs/product/ai.svg',
    title: 'AI平台',
    subTitle: '5分钟上手零代码构建',
    bgColor: '#70c3ff',
    url: '',
  },
  {
    logo: '/imgs/product/camera.svg',
    title: '智能巡场',
    subTitle: '为用户提供更优质的服务',
    bgColor: '#fd6a7f',
    url: '',
  },
  {
    logo: '/imgs/product/dialog.svg',
    title: '智能问答',
    subTitle: '赋能企业答疑互动效率',
    bgColor: '#7f8ea0',
    url: '',
  },
  {
    logo: '/imgs/product/expose.svg',
    title: '曝光方案',
    subTitle: '一露头我就发现你了',
    bgColor: '#89d04f',
    url: '',
  }
]
stars: [
  {
    avatar: '/imgs/stars/bishu.webp',
    name: '周喆直',
    desc: '流浪地球中国代表',
    url: '',
  },
  {
    avatar: '/imgs/stars/jinghuai.jpg',
    name: '刘培强',
    desc: '领航员',
    url: '',
  },
  {
    avatar: '/imgs/stars/yeye.webp',
    name: '图恒宇',
    desc: '流浪地球程序员',
    url: '',
  },
]
footer: MIT Licensed | Copyright © 2023 Jia Yechao
---

<Banner />

<div class="container">

<section class="banner-container">
  <SectionHeader title="OpenSource / 开源项目" subTitle="种类众多的开源项目，让你爱不释手"></SectionHeader>
  <OpenProduct></OpenProduct>
</section>

<section>
  <SectionHeader title="Blog / 博客" subTitle="最新技术发展,业界前沿博客"></SectionHeader>
  <div>
    <BlogPre></BlogPre>
  </div>
</section>

<section>
  <SectionHeader title="SuperStar / 超级明星" subTitle="技术达人，最强大脑，前端先驱"></SectionHeader>
  <SuperStar></SuperStar>
</section>

</div>

<script>
  new WOW().init();
</script>

<style lang="styl" scoped>
  .container
    padding-left 20px 
    padding-right 20px 
    .banner-container
      margin-bottom 40px
</style>