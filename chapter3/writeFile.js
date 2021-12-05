const fs = require('fs').promises;

fs.writeFile('./writeMe.txt', '집가고싶다')
	.then(() => {
		return fs.readFile('./writeMe.txt');
	})
	.then((data) => {
		console.log(data.toString());
	})
	.catch((err) => {
		console.error(err);
	});