const camelToHyphen = require("./index");

let testCase = [
    "FirstUpperCase",
    "standerCamelCase",
    "thisIsASingleLetterCase",
    "XMLParser",
];

testCase.forEach((text) => console.log(text + " -> " + camelToHyphen(text)));
