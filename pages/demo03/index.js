import $ from 'jquery'
import Mock from 'mockjs'

// Mock.mock(rurl, function(options))
// options包括了url、type(get/post/put/delete)和body(请求返回内容)三个属性
Mock.mock(/hi\.json/, options => {
  return {
    'hi': options
  }
})

// Mock.mock( rurl, template )
Mock.mock(/hello\.json/, {
  'hello': {
    'a': '@string',
    'b': '@number',
    'c': '@name'
  }
})

// Mock.mock( rurl, template )
Mock.mock(/helloworld\.json/, 'post', {
  'helloworld|1-3': [
    '@string'
  ]
})


// 发送请求
$.ajax({
  url: 'hi.json',
  dataType: 'json'
}).done(data => {
  $('<pre>').text(JSON.stringify(data, null, 4))
      .appendTo('body')
})

$.ajax({
  url: 'hello.json',
  dataType: 'json',
  data: {
    foo: 1,
    bar: 2,
    faz: 3
  }
}).done(data => {
  $('<pre>').text(JSON.stringify(data, null, 4))
      .appendTo('body')
})

$.ajax({
  url: 'helloworld.json',
  type: 'post',
  dataType: 'json',
  data: {
    foo: 1,
    bar: 2,
    faz: 3
  }
}).done(data => {
  $('<pre>').text(JSON.stringify(data, null, 4))
      .appendTo('body')
})
