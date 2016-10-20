## 项目简介

* 本项目为前端简易快速上手工程，利用webpack搭建，本地服务采用webpack-dev-server
* 可用于快速验证或创建一些新的技术项目工程
* 使用yeoman脚手架将该工程做成模板


## 版本日志

### v1.0.0

2016-10-18 23:45

* 设计项目代码结构
* 搭建webpack-dev-server自动刷新浏览器的服务器，更改代码后自动刷新浏览器（html不行）
* 单个项目多页面支持
* babel、less以及url三种loader支持
* src目录和dist目录结构一一对应，且自动会读取src下的页面名称，用于在dist目录下输出对应的目录
* webpack编译前，先增加了先删除dist目录下的内容，再进行webpack编译生成新的dist目录下的内容的功能