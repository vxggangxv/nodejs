// Node.js - File System 모듈 호출
// 참고 URL: http://nodejs.org/api/fs.html
var fs = require('fs');

console.log('파일 읽기 프로세스 시작...');

// File System - readFile() 사용
/*fs.readFile('files/about-nodejs.txt', function(err, data){
  console.log('data:' + data);

});*/

var data = fs.readFileSync('files/user.json');
var json2obj = JSON.parse(data);
console.log('data:' + json2obj.nick);

console.log('파일 읽기 프로세스 끝.');