import $ from 'jquery'
import Mock from 'mockjs'

let template = {
  'str1|1-3': '★',
  'str2|3': '★-'
}
let data = {
  'str1': '★★★★★★',
  'str2': '★-'
}
let result = Mock.valid(template, data)

$('<pre>').text(JSON.stringify(result, null, 4))
      .appendTo('body')

// -> 结果
// [
//     {
//         "path": [
//             "ROOT",
//             "str1"
//         ],
//         "type": "repeat count",
//         "actual": 6,
//         "expected": 3,
//         "action": "is less than or equal to",
//         "message": "[REPEAT COUNT] Expect ROOT.str1'repeat count is less than or equal to 3, but is 6"
//     },
//     {
//         "path": [
//             "ROOT",
//             "str2"
//         ],
//         "type": "repeat count",
//         "actual": 1,
//         "expected": 3,
//         "action": "is equal to",
//         "message": "[REPEAT COUNT] Expect ROOT.str2'repeat count is equal to 3, but is 1"
//     }
// ]