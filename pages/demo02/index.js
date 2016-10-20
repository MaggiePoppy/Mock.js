import createMock from 'util/create-mock'

// 占位符 的格式为：
// @占位符
// @占位符(参数 [, 参数])

// 注意：

// 用 @ 来标识其后的字符串是 占位符
// 占位符 引用的是 Mock.Random 中的方法
// 通过 Mock.Random.extend() 来扩展自定义占位符
// 占位符 也可以引用 数据模板 中的属性
// 占位符 会优先引用 数据模板 中的属性
// 占位符 支持 相对路径 和 绝对路径

// 字符串
createMock('1、占位符', {
  name: {
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    full: '@first @middle @last'
  }
})