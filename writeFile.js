// https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
var fs = require('fs');
console.log('문서 쓰기 프로세스 시작...');

var cssDoc = '#nodejs {margin:0;}';
var options = {encoding: 'utf8'};
fs.writeFile(
	'files/style.css',
	 cssDoc,
	 options,
	 function() {
	 	console.log('files/style.css 파일생성');
	 }
);

console.log('문서 쓰기 프로세스 끝.');
