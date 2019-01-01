# megalo 构建过程分析

[关于webpack 配置解释](https://megalojs.org/#/config/webpack)

用到的工具：

* @megalo/target => 构建目标
* @megalo/template-compiler => 模板编译器
* @megalo/env-plugin => 注入环境变量 process.env.PLATFORM 和 process.env.NODE_ENV
* vue-loader => 加载和解析 .vue 文件
* mini-css-extract-plugin => 将 css 提取到 .wxss 文件

## @megalo/target

提供 createMegaloTarget 方法，接收

* compiler 模板编译器
* platform 指定小程序平台
* htmlParse v-html 模板解析工具

### 内部实现

应用了以下插件

* LoaderTargetPlugin => webpack.LoaderTargetPlugin
* **MegaloPlugin** => @megalo/target/lib/plugins/MegaloPlugin
* frameworks/vue/plugin => @megalo/target/lib/frameworks/vue/plugin
* frameworks/regular/plugin => @megalo/target/lib/frameworks/regular/plugin

#### LoaderTargetPlugin

在载入每个模块时候设置上下文target值

### MegaloPlugin

需要 createMegaloTarget 接收的参数作为参数传入

生成平台代码文件
```
      // emit files, includes:
      // 1. pages (wxml/wxss/js/json)
      // 2. components
      // 3. slots
      // 4. htmlparse
```

#### hookJSEntry

处理入口文件

@megalo/target/lib/loaders/js-entry

在babel-loader处理之前进行处理

### vue-loader

将其他规则应用到.vue文件中对应的语言模块

解释和用法：[手动配置](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E9%85%8D%E7%BD%AE)

peer dependency -> vue-template-compiler

### MegaloPlugin
