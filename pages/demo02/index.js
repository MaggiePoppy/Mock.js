import { Random } from 'mockjs'
import createMock from 'util/create-mock'

// 示例查看地址：http://mockjs.com/examples.html#DPD

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

// 基本占位符
createMock('1、Basic占位符', {
  // 布尔值
   // Random.boolean( min, max, current )
  boolean: {
    ok: '@boolean',
    no: '@boolean(1, 9, true)',
    alter: Random.boolean(1, 9, true)
  },

  // 自然数
  // Random.natural( min )
  // Random.natural( min, max )
  natural: {
    a: '@natural',
    b: '@natural(10000)',
    c: Random.natural(60, 100)
  },

  // 整数
  // Random.integer( min )
  // Random.integer( min, max )
  integer: {
    a: '@integer',
    b: '@integer(10000)',
    c: Random.integer(60, 100)
  },

  // 浮点数
  // Random.float( min )
  // Random.float( min, max )
  // Random.float( min, max, dmin )
  // Random.float( min, max, dmin, dmax )
  float: {
    a: '@float',
    b: '@float(1)',
    c: Random.float(6, 100),
    d: Random.float(5, 10, 2, 5)
  },

  // 字符
  // Random.character( 'lower/upper/number/symbol' )
  // Random.character( pool )
  character: {
    a: '@character',
    b: '@character(number)',

    // 指定类型的字符
    c: Random.character('lower'),
    d: Random.character('upper'),
    e: Random.character('number'),
    f: Random.character('symbol'),

    // 随机字符池
    g: Random.character('aeiou'),
    h: '@character(hello)'
  },

  // 字符串
  // Random.string( length )
  // Random.string( pool, length )
  // Random.string( min, max )
  // Random.string( pool, min, max )
  string: {
    a: '@string',
    b: '@string()',
    c: '@string(6)',
    d: Random.string('lower', 5),
    e: Random.string('upper', 6),
    f: Random.string('number', 7),
    g: Random.string('symbol', 8),
    h: Random.string('aeiou', 9),
    i: '@string(1, 10)',
    j: '@string("hello", 1, 5)'
  },

  // 数组
  // Random.range( stop )
  // Random.range( start, stop )
  // Random.range( start, stop, step )
  range: {
    b: '@range(5)',
    a: Random.range(2, 5),
    c: '@range(1, 10, 2)'
  }
})


// 日期和时间
createMock('2、Date', {
  // 日期
  // Random.date( format )
  date: {
    a: '@date',
    b: '@date()',
    c: '@date("yyyy-MM-dd")',
    d: '@date("yy-MM-dd")',
    e: '@date("yyyy yy y MM M dd d")'
  },

  // 时间
  // Random.time( format )
  time: {
    a: Random.time('A HH:mm:ss'),
    b: Random.time('a HH:mm:ss'),
    c: Random.time('HH:mm:ss a'),
    d: Random.time('H:m:s'),
    e: '@datetime("HH H hh h mm m ss s SS S A a T")'
  },

  // 日期和时间
  datetime: {
    a: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
    b: Random.datetime('yy-MM-dd a HH:mm:ss'),
    c: Random.datetime('y-MM-dd HH:mm:ss'),
    d: Random.datetime('y-M-d H:m:s')
  },

  // 现在时间
  now: {
    a: '@now()',
    b: '@now("year")',
    c: Random.now('yyyy-MM-dd HH:mm:ss SS'),
    d: Random.now('day', 'yyyy-MM-dd HH:mm:ss SS')
  }
})

// 图片
createMock('3、图片', {
  // 链接图片
  image: {
    // Random.image( size )
    a: Random.image('100*200'),
    // Random.image( size, background )
    b: '@image("200x100", "#FF6600")',
    // Random.image( size, background, text )
    c: Random.image('200x100', '#4A7BF7', 'Hello'),
    // Random.image( size, background, foreground, text )
    d: Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
    // Random.image( size, background, foreground, format, text )
    e: Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
  },

  // base64图片
  dataImage: {
    // Random.dataImage()
    a: Random.dataImage(),
    // Random.dataImage( size )
    b: Random.dataImage('200x100'),
    // Random.dataImage( size, text )
    c: Random.dataImage('200x100', 'Hello Mock.js!')
  }
})