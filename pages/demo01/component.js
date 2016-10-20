import $ from 'jquery'

let showMyName = (name) => {
  $('h1').text(`Hello world! My name is ${ name }!`)
}

module.exports = function(){
  showMyName('demo01')
  alert('component demo01')
}