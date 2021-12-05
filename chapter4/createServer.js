const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
	// res.writeHead(statusCode[, statusMessage][, headers])
	try {
		const data = await fs.readFile('./createServer.html');
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.end(data);
	} catch (err) {
		console.error(err);
		res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
		res.end(err.message);
	}
});

server.listen(8080);

server.on('listening', () => {
	console.log('waiting for server at port 8080');
});
server.on('error', (error) => {
	console.log(error);
});