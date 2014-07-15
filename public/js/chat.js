$(function(){
    var socket = io();

    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });

    $('#mf').submit(function(){
      if($('#nick').val()){
        var data = {
          name: $('#nick').val(),
          msg: $('#m').val()
        }
        socket.emit('chat message', data);
        $('#m').val('');
        $('#messages').append($('<li>').text(data.msg));
      }
      return false;
    });

    $('#ff').submit(function(){
      $('#nav-name').text(($('#nick').val()?$('#nick').val():'nick name not set'));
      if($('#nick').val()){
        var data = {
          name: $('#nick').val(),
        }
        socket.emit('register', data);
      }
      return false;
    });

})
