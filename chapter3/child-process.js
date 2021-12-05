//const {exec} = require('child_process'); 와 동일
const exec = require('child_process').exec;

//ls 명령어를 실행하고 결과는 stdout과 stderr에 달린 data에 버퍼형태로 전달됨
var process = exec('ls');

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러