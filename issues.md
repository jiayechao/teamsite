1. 静态文件的地址
  文档中的静态文件地址鼓励使用相对地址，这个没问题。但是在配置中的地址该怎么写并没有示例。
  在logo配置中，示例是'/assets/img/logo.png'，但是没用。
  通过build后，public的文件被直接拷贝到生成目录中，可以直接用/imgs/xxx来用
  
2. elementUI的按需加载
  查找issues通过chainWebpack配置
  