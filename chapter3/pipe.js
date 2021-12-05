const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('stream.txt');
const writeStream = fs.createWriteStream('stream2.txt');
readStream.pipe(writeStream);
// 이러면 stream에서 내용이 stream2로 넘어가진다.

const zlibStream = zlib.createGzip();
const writeStreamGzip=fs.createWriteStream('stream.txt.gz');
readStream.pipe(zlibStream).pipe(writeStreamGzip);
// pipe를 여러번 써서 stream으로 값을 넘길 수 있다.