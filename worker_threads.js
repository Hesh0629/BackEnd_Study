const { Worker, isMainThread, parentPort } = require('worker_threads');

//threadName.on으로 메시지를 받고 .postMessage로 메시지를 보냄

if (isMainThread) {
	// 부모일 때
	const worker = new Worker(__filename); //new Worker로 현재 파일에서 워커를 사용함
	worker.on('message', (message) => console.log('from worker', message));
	worker.on('exit', () => console.log('worker exit'));
	worker.postMessage('ping');
} else {
	// 워커일 때
	parentPort.on('message', (value) => {
		console.log('from parent', value);
		parentPort.postMessage('pong');
		//worker에서는 .on을 이용했다면 직접종료를 진행해야함.
		parentPort.close(); //종료 후 exit를 postMessage
	});
}