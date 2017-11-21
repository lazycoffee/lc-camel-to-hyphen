# lc-camel-to-hyphen
Transfer word from camel case to hyphen case in JavaScript.

## usage
See example:

```JavaScript
const camelToHyphen = require('lc-camel-to-hyphen');

let testCase = ['FirstUpperCase', 'standerCamelCase','thisIsASingleLetterCase'];
testCase.forEach(text=>console.log(text + ' -> ' + camelToHyphen(text)));
// FirstUpperCase -> first-upper-case
// standerCamelCase -> stander-camel-case
// thisIsASingleLetterCase -> this-is-a-single-letter-case
```