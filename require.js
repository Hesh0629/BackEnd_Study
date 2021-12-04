module.exports='find me';
require('./var');

//require한 모듈은 cache에 저장된다.
console.log(require.cache);

//main에는 노드 실행 시 첫 모듈을 저장
console.log(require.main === module);
console.log(require.main.filename);