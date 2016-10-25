import $ from 'jquery'
import Mock from 'mockjs'

module.exports = function createMock(title, template) {
  let data = Mock.mock(template)
  let $title = $(`<h3>${ title }</h3>`)
  let $container = $('<pre></pre>')

  $container.html(JSON.stringify(data, null, 4))
  $('#mock').append($title).append($container)
}