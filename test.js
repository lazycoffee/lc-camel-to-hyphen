const camelToHyphen = require('./index');

let testCase = ['FirstUpperCase', 'standerCamelCase','thisIsASingleLetterCase'];

testCase.forEach(text=>console.log(text + ' -> ' + camelToHyphen(text)));