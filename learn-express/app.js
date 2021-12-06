const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 8080);

app.use(morgan('dev')); //요청과 응답에 대한 정보를 콘솔에 띄워줌

// public폴더에 css js img 파일을 넣으면 브라우저에서 접근 가능
// 서버 폴더 경로와 요청 경로는 달라짐 (요청:/파일.확장자, 실제: __dirname/public/~)
app.use('/', express.static(path.join(__dirname, 'public')));

//body-parser : 요청의 본문에 있는 데이터를 해석하여 req.body로 만듬
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
	res.cookie('key','value',{option...})으로 쿠키를 만들고 
	지울 때도 정확히 key value option(expires,maxAge제외)가 일치해야함
	option에 signed:true로 놓으면 쿠키 뒤에 서명이 붙음.
	이때 서명을 위한 비밀 키는 process.env.COOKIE_SECRET이 됨
	.env 파일은 process.env로 만들어진다.
	process.env.key = value로 읽힘
*/
app.use(cookieParser(process.env.COOKIE_SECRET));

// 임의의 세션을 만들고 저장해둠.
app.use(session({
  resave: false, //요청이 올 때 수정 사항이 생기지 않더라도 다시 저장할지
  saveUninitialized: false, //세션에 저장할 내역이 없어도 처음부터 세션을 생성할지
  secret: process.env.COOKIE_SECRET, //쿠키를 보낼 때 서명 추가(서명은 cookieParser와 동일하게 하는 것이 좋음)
	name: 'seesion-cookie.sid', //세션 쿠키의 이름 (default : connect.sid)
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.use((req,res,next)=>{
	console.log('모든 요청에 실행되는 middleware');
	next(); //다음 미들웨어로 넘어가려면 next()를 붙여야함.
});

app.get('/',(req,res,next)=>{
	console.log('GET / 요청에 실행되는 middleware');
	next(); //다음 미들웨어로 넘어가려면 next()를 붙여야함.
},(req,res)=>{
	throw new Error('에러 발생시 에러 처리 미들웨어로 감')
})

app.use((err,req,res,next)=>{
	console.error(err);
	res.status(500).send(err.message);
});

app.get('/', (req, res) => {
	//res.send('hi express');
	res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(app.get('port'), () => {
	console.log('waiting from port ', app.get('port'));
});