const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');
const publicpath=path.join(__dirname,'../public');
const port=process.env.PORT ||  3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicpath));
io.on('connection',(socket)=>{
   console.log('connected..');
   socket.on('disonnected',()=>{
      console.log('User was disconnected')
   });
   socket.emit('newEmail',{
      from:'mohini@gmail.com',
       text:'hello,what is going on',
       createAt:123
   });
    socket.emit('newMessage',{
       from:'mohini',
        text:'see you then',
        createdAt:123123
    });
   socket.on('createEmail',(newEmail)=>{
      console.log('createEmail',newEmail);
   });
    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    })
})
server.listen(port,()=>{
   console.log(`server is up on port ${port}`);
});
