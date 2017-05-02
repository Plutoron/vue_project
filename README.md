# vueforsy

> A Vue.js project

## 本demo旨在学习vue框架 并附加 个人的简易网易云播放器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 代码结构

```shell
src
├── App.vue            # app入口，无需修改
├── assets
│   └── img            # Mod所需要的图片
├── config.js          # 项目配置文件
├── filters            # 过滤器
│   └── filter.vue     # 定义的过滤器(暂无)  
├── main.js            # vue入口
├── router             # 路由
│   └── index.js       #  默认路由  
├── services
│   ├── 163Music.vue   # 网易云音乐组件 分离出来
│   └── mod.vue   	   # Link界面CSS3Mod 分离出来
└── components         # 单页面数据
   ├── info.vue        #  Info 页面  
   ├── link.vue        #  Info 页面  
   ├── main.vue        #  main 页面    
   └── other.vue       #  other 页面  

```