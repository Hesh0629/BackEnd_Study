// stream은 파일을 조금씩 나눠서 계속해서 전달한다. 나눠진 조각은 chunk라고 부름.

const fs = require('fs');

//createReadStream으로 읽기 스트림을 제작

const writeStream = fs.createWriteStream('./stream.txt');
writeStream.on('finish', () => {
	console.log('파일 쓰기 완료');
});

writeStream.write('stream을 통해 글을 작성.\n');
writeStream.write('아쉬우니 한 줄 더 작성.');
writeStream.end(); // 이 때 finish 이벤트 발생