const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service : 'gmail',
  auth : {
    user : 'divyafz90@gmail.com',
    pass : 'itisdivya'
  }
});

var mailOptions = {
  from : 'anu@gmail.com',
  to : 'anuragyadav13481@gmail.com, anufz00@gmail.com, divyafz90@gmail.com',
  subject : 'This is my subject hii how are you',
  text : 'This is simple text',
  html : '<h1 style="text-align:center">Anurag<h1><br><p style="text-align:justify; color:green; font-size:20px;">Hello how are you this is me Anurag Yadav sending an email to you to find how to send and email using nodemailer</p>',
  filename : './hello.txt',
  content : 'hello-world'
};

transporter.sendMail(mailOptions, function(error,info){
  if (error) {
    console.log(error);
  }
  else {
    console.log('Mail sent : '+ info.accepted);
  }
});
