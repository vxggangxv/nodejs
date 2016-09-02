/*// combineJS 모듈 정의
function combineJS() {
	console.log('combineJS 모듈');
}

// combineJS 모듈 외부로 출력(Exports)
module.exports = combineJS;*/

/*// combineJS 모듈 정의 및 외부로 출력
module.exports = function() {
	console.log('combineJS 모듈');
}*/

// File System 내장 모듈 호출
var fs = require('fs')
		minify = require('minify');
/*
	combineJS 모듈 정의 및 외부로 출력
	모듈 내부에 전달받을 인자(배열, 문자열) 설정
	압축 유무를 설정하는 min 옵션 추가(기본값: false)
*/
module.exports = function(jsSrc, exportJs, min) {
	var mergeCode = '';
		 len= jsSrc.length-1; // 조건 확인을 위한 len 변수
	// min 초기 값 설정
	min = min || false;
	// 배열 jsSrc를 개별적으로 접근 조직하기 위해
	// forEach 배열 메소드 사용.
	jsSrc.forEach(function(file, index){
		if(min) {
			minify(file, function(err, data) {
				mergeCode += data;
				if(index==len){ writeFile(); }
			});
		} else {
			// fs.readFileSync() 사용하여 파일 내용 읽기
			mergeCode += fs.readFileSync(file);
			if(index==len){ writeFile() };

			// console.log(index + ", " + jsSrc.length);
		}
	});

	// 병합된 코드 mergeCode내용 파일 생성
	function writeFile() {
		fs.writeFileSync(exportJs, mergeCode);
	}
}