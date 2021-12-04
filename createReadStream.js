const fs = require('fs');

const readStream = fs.createReadStream('./stream.txt', { highWaterMark: 16 }); //highWaterMark옵션으로 버퍼의 크기를 바이트 단위로 조정
const data = [];

readStream.on('data', (chunk) => {
	data.push(chunk);
	console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
	console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
	console.log('error :', err);
});