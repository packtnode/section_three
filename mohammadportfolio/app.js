const express = require('express');
const app = express();
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const c = console.log;

let transporter = nodemailer.createTransport({
	service: 'gmail',
	secure: false,
	port: 25,
	auth:{
		user: 'mohammadhunan@gmail.com',
		pass: 'Lidsfitteds1'
	}
})

let mailOptions = {
	from: '"Portfolio Message" <mohammad.chughtai@gmail.com> ',
	to: 'mohammadhunan@gmail.com',
	subject: '',
	text: '',
	html: ''
}

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())


app.get('/:page',function(req,res){
	res.render('index');
})
app.get('/',function(req,res){
	res.render('index');
})

app.post('/message/new',function(req,res){
	console.log(req.body.name);
	console.log(req.body.phone_or_email);
	console.log(req.body.message);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify({ status: "OK" }));
	res.end();
	mailOptions['subject'] = 'new portfolio message from ' + req.body.name ;
	mailOptions['text'] = req.body.message + " \n      " + " phone number or email : " + req.body.phone_or_email;

	transporter.sendMail(mailOptions,(error,info)=>{
		error?c('error',error):c('success');
	});

})

app.listen(3000,(err)=> err? c("error has occured \n")+err:c('listening on 3000'));