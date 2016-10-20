import $ from 'jquery'
import Mock from 'mockjs'

module.exports = function createMock(title, config) {
  let data = Mock.mock(config)
  let $title = $(`<h3>${ title }</h3>`)
  let $container = $('<pre></pre>')

  $container.html(JSON.stringify(data, null, 4))
  $('#mock').append($title).append($container)
}