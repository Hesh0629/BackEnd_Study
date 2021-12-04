const url = require('url');

//url모듈에서 생성자 들고 오기
const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL); //WHATWG 방식으로 표기
console.log('url.format():', url.format(myURL)); //분해된 url을 조립해줌
console.log('------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'); //기존 노드의 URL 구분 방법으로 url을 분해
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));