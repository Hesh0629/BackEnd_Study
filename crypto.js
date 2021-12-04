const crypto = require('crypto');

//crypto.createHash(해시 알고리즘).update(바꿀 데이터).digest(인코딩할 알고리즘)
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64')); //base64방식이 짧다.
//console.log('latin1:', crypto.createHash('sha512').update('비밀번호').digest('latin1'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

crypto.randomBytes(64, (err, buf) => {
	const salt = buf.toString('base64'); //randomBytes로 64바이트 길이의 문자열을 만듬
	console.log('salt', salt);
	//pbkdf2(함호화를 할 값, salt, 반복횟수, 출력 바이트. 해시 알고리즘)
	crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
		console.log('password:', key.toString('base64'));
	});
});