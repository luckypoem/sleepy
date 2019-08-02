# sleepy

> 使用 Next.js 和 Github Issues 搭建博客

[![Build Status](https://travis-ci.com/zhw2590582/sleepy.svg?branch=master)](https://travis-ci.com/zhw2590582/sleepy)

博客又换了个样子，这个博客主题叫 `Sleepy`，意思就是我困了的意思，目前有以下几个功能

- 使用 `Next.js` 搭建，可以无缝使用 `React` 生态系统
- 全站 `AJAX`，文章数据都是来自 `Github Issues Api`，所以意味着放弃很多的 `SEO`
- 集成评论系统 `Gitting`，可以使用 `Markdown`
- 内建有两个空白的页面：关于和邻居，其余功能页面以后按需添加
- 接口数据都使用了缓存技术，所以访问页面会非常流畅
- 自动获取文章第一张图片作为特色图
- 支持文章关闭评论
- 自动生成文章导航栏
- 集成百度统计

在上次的`cli`搭建的经验下再次优化了体验流程，这次使用的是 `Next.js` 作为静态文件生成框架，可以说真的非常强大非常方便。然后也优化了整个配置流程和发`issues` 的流程，很适合只有一个域名，却没有空间和 `https` 的人，但还是需要小小的前端知识，那下面说下具体搭建流程吧。

### 获取代码
这部不用说了，你可以直接 `fork` 再 `clone` 到本地，也可以直接 `clone` 再  `push` 到 `github `。

### 修改配置
配置文件在 `sleepy.config.js`，一眼看见就知道怎么配置了，主要是要 [注册新的OAuth应用程序](https://github.com/settings/applications/new), 也很简单的。

假如你有自己的域名的话，那还有一个地方要改的，就是要自动生成你的 `CNAME` 文件，也就是填上你的域名，在 `package.json` -> `scripts ` -> `create:cname`，把 `sleepy.im` 改为你的域名就可以了。

假如没有域名也没关系，那就用 `Github` 分配的呗，例如 `yourname.github.io`。

### 打包发布
下面就需要小小前端能力了，首先就是安装 `nodejs`，然后命令行进入 `sleepy` 目录，按步骤运行以下打包命令：`npm install` -> `npm run build`，你也可以运行开发预览：`npm start`。

然后 `push` 到 `Github`。

### 创建博客
在你的 `repository ` 的 `Setting` 页面的 `GitHub Pages`，选择 `master branch /docs folder`, 有域名的话那就填上域名，还可以勾选 `https` 功能。

### 撰写博客
因为博客数据都是来自于 `Github Issues Api`，所以写博客要遵循两个规则：
- 新建文章 `issue`，要打上 `POST` 标签
- 新建页面 `issue`，要打上 `PAGE` 标签，而且要打上页面类型标签，页面都是内建的，目前可选的标签有：`about` 或者 `friends`。

以上已经是全部步骤了，整体流程简约了很多，不过我还是觉得在 `Github Issues` 上写文章也只有国内的人才有的习惯，不过也只是很小众化的群体。
