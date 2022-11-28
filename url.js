const url = require('url');
// const strUc = require('upper-case');
var webAddr = 'http://www.localhost.com/demo/?action=getData&id=123';
var urlData = url.parse(webAddr);
console.log(urlData)
console.log(urlData.protocol)
console.log(urlData.host)

// console.log(strUc('Hello '))