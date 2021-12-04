const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
	// 부모일 때
	const threads = new Set(); //돌아가고 있는 워커스레드들을 저장
	threads.add(
		new Worker(__filename, {
			workerData: { start: 1 },
		})
	);
	threads.add(
		new Worker(__filename, {
			workerData: { start: 2 },
		})
	);
	for (let worker of threads) {
		worker.on('message', (message) => console.log('from worker', message));
		worker.on('exit', () => {
			threads.delete(worker);
			if (threads.size === 0) {
				console.log('job done');
			}
		});
	}
} else {
	// 워커일 때
	const data = workerData;
	//parentPort : 현재 스레드가 워커스레드일 때 parent로 message를 보낼 수 있는 포트
	parentPort.postMessage(data.start + 100);
}