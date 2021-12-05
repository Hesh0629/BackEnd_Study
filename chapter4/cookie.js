const http=require('http');

http.createServer((req,res)=>{
	console.log(req.url, req.headers.cookie);
	//서버가 내쪽으로 쿠키를 보내준다. (동시에 내가 받은 쿠키를 저장해둬서 추적할 수 있다)
	res.writeHead(200,{'Set-Cookie':'mycookie=test'});
	res.end('쿠키 냠냠');
})
	.listen(8080,()=>{
	console.log('8080port 대기중')
})