require('./index.less')

import $ from 'jquery'
import Mock from 'mockjs'

function createMock(title, config) {
  let data = Mock.mock(config)
  let $title = $(`<h3>${ title }</h3>`)
  let $container = $('<pre></pre>')

  $container.html(JSON.stringify(data, null, 4))
  $('#mock').append($title).append($container)
}

// 规则查看地址：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
// 生成规则 有 7 种格式：
// 'name|min-max': value
// 'name|count': value
// 'name|min-max.dmin-dmax': value
// 'name|min-max.dcount': value
// 'name|count.dmin-dmax': value
// 'name|count.dcount': value
// 'name|+step': value

// 字符串
createMock('1、字符串', {
  'str1|1-10': '★',
  'str2|3': '★-'
})


// 数字
createMock('2、数字', {
  'number0|+1': 2,
  'number1|1-100.1-10': 1,
  'number2|123.1-10': 1,
  'number3|123.3': 1,
  'number4|123.10': 1.123,

  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})

// 布尔值
createMock('3、布尔值', {
  // 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
  'boolean0|1': true,

  // 随机生成一个布尔值
  // 值为 value 的概率是 min / (min + max)
  // 值为 !value 的概率是 max / (min + max)
  'boolean1|1-2': true
})

// 对象
createMock('4、对象', {
  // 从属性值 object1 中随机选取 2 个属性
  'object1|2': {
    '310000': '上海市',
    '320000': '江苏省',
    '330000': '浙江省',
    '340000': '安徽省'
  },

  // 从属性值 object2 中随机选取 2 到 4 个属性
  'object2|2-4': {
    '110000': '北京市',
    '120000': '天津市',
    '130000': '河北省',
    '140000': '山西省'
  }
})

// 数组
createMock('5、数组', {
  // 从属性值 array1 中随机选取 1 个元素，作为最终值
  'array1|1': [
    'AMD',
    'CMD',
    'UMD'
  ],

  // 从属性值 array2 中顺序选取 1 个元素，作为最终值
  'array2|+1': [
    'AMD',
    'CMD',
    'UMD'
  ],

  // 通过重复属性值 array3 生成一个新数组，重复次数大于等于 min，小于等于 max
  // 子对象中是按照顺序来取的
  'array3|1-10': [
    {
      'name|+1': [
        'Hello',
        'Mock.js',
        '!'
      ]
    }
  ],

  // 通过重复属性值 array3 生成一个新数组，重复次数大于等于 min，小于等于 max
  'array4|1-10': [
    'Mock.js'
  ],

  // 通过重复属性值 array3 生成一个新数组，重复次数大于等于 min，小于等于 max
  // 重复内容为下面的3个字符串
  'array5|1-10': [
    'Hello',
    'Mock.js',
    '!'
  ]
})


// 方法
createMock('6、方法', {
  'foo': 'Syntax Demo',
  'name': function() {
    return this.foo + ': 这里可以写自己的逻辑。'
  }
})

// 正则表达式
// 输出正则表达式所匹配的字符串
createMock('7、正则表达式', {
  'regexp': /[a-z][A-Z][0-9]/
})


// 路径
createMock('8、路径Path', {
  'foo': 'Hello',
  'nested': {
    'a': {
      'b': {
        'c': 'Mock.js'
      }
    }
  },

  // 绝对路径
  'absolutePath': '@/foo  @/nested/a/b/c',

  // 相对路径
  'relativePath': {
    'a': {
      'b': {
        'c': '@../../../foo  @../../../nested/a/b/c'
      }
    }
  }
})