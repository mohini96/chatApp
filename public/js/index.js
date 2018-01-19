
var socket = io();
socket.on('connect',()=>{
    console.log('connected to server');
    socket.emit('createEmail',{
        to:'rupal@gmail.com',
        text:'hey,this is rupal'
    });
    socket.emit('createMessage',{
        from:'rupal',
        text:'hup,thas the work for me',
    })
});

socket.on('diconnect',()=>{
    console.log('diconnected to server');
 });

socket.on('newMessage',(message)=>{
    console.log('message',message);
});
socket.on('newEmail',function(email) {
  console.log('new email',email);
});
