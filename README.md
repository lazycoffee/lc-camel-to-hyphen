# lc-camel-to-hyphen
This is an npm package that converts text in camel case into text in kebab case.
<br />
这是一个把驼峰写法的文本转换为中横线写法（烤肉串写法）的npm包。

## usage 使用方法

1. In most scenarios, that is, when there are no consecutive capital letters, we will change the capitalized first letter to lowercase and add a hyphen, for example: "CamelCase" > "camel-case".
2. If we encounter consecutive capital letters, we will regard the whole string of consecutive capital letters, except for the last one, as a complete word, change the capitalized first letter of that word to lowercase, and add a hyphen, for example "XMLParser" > "xml-parser".

<br />

1. 在大多数场景，也就是没有连着的大写字母，我们会把首字母大写改为小写，并加上中横线。如："CamelCase" > "camel-case"。
2. 如果遇到连着的大写字母，我们会把连着的整串大写字母，除最后一位，视作为一个完整的单词，把该单词首字母大写转为小字，并加上中横线，例如："XMLParser" > "xml-parser"。

See below example: <br />
参考下面样例：

```JavaScript
const camelToHyphen = require('lc-camel-to-hyphen');

let testCase = [
    'FirstUpperCase', // first-upper-case
    'standerCamelCase', // stander-camel-case
    'thisIsASingleLetterCase', // this-is-a-single-letter-case
    'XMLParser', // xml-parser
];
testCase.forEach(text=>console.log(text + ' -> ' + camelToHyphen(text)));
```