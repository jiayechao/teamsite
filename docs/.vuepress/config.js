module.exports = {
  base: '/teamsite/',
  title: '广研智能中心',
  description: 'Just playing self',
  head: [
    ['link', { rel: 'icon', href: '/imgs/logo.svg' }],
    ['link', { href: '/static/animate.min.css', rel: 'stylesheet' }],
    ['script', { src: '/static/wow.min.js' }],
    ['script', { src: '/static/main.js', defer: true }],
  ],
  themeConfig: {
    search: false,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['/blog/hello', '基本信息'],
        ]
      },
    ],
    logo: '/imgs/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/hello' },
      { text: '导航', link: 'https://google.com2' },
      { text: '关于', link: 'https://google.com' },
    ]
  },
  chainWebpack: (config, isServer) => {
    // Thanks to https://github.com/vuejs/vuepress/issues/969#issuecomment-434193517
    // https://stackoverflow.com/a/52121492/4017403
    config.module
      .rule('js') // Find the rule.
      .use('babel-loader') // Find the loader
      .tap(options => Object.assign(options, { // Modifying options
        plugins: [
          ["component", {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }]
        ]
      }))
  },
}