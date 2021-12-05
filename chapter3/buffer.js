// buffer는 파일을 읽을 때 데이터 모은 후에 데이터를 한번에 보내주는 방식이다. (node는 미리 데이터 공간을 할당해줌)

const buffer = Buffer.from('버퍼로 바뀔 내용');
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);