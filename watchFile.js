// https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener
var fs = require('fs');

// style.css 문서 경로
var styleDoc = 'files/style.css';

// watchFile() - 파일 변화를 지속적으로 관찰함.
fs.watchFile(styleDoc, function(cur, prv) {
	// readFileSync() - 파일을 동기적으로 읽어옴.
	var doc = fs.readFileSync(styleDoc);
	console.log('변경된 문서 내용 \n' + doc);
});

/*fs.watch('files', (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);
  } else {
    console.log('filename not provided');
  }
});*/