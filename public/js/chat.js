$(function(){
    var socket = io();

    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
    
    $('#mf').submit(function(){
      if($('#nick').val()){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
      }
      return false;
    });
    
    $('#ff').submit(function(){
      $('#nav-name').text(($('#nick').val()?$('#nick').val():'nick name not set'));
      if($('#nick').val()){
        socket.emit('register', $('#nick').val());
      }
      return false;
    });    

})
