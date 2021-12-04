const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; // key: 32 byte, iv: 16byte
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('까꿍', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화 결과:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화 결과:', result2);