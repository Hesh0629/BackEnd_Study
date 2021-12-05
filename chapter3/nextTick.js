setImmediate(()=>{
	console.log('immediate');
});

//다른 콜백보다 우선 처리하게함
process.nextTick(()=>{
	console.log('nextTick');
})

//특수한 경우에만 setTimeout 0 가 immediate보다 늦게 실행
setTimeout(()=>{
	console.log('timeOut 0')
},0);

//resolve된 promise도 먼저 실행됨
Promise.resolve().then(()=>console.log('promise'));