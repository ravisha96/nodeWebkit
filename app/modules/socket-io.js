(function () {

    function Socket (server) {

      // Require socket.io node packege.
      var io = require('socket.io'),
          self = this;

      // Initializing socket.io will accepts http server.
      // Server is the instance of node server in our case http://localhost:3000.
      // This params is passed while initializing this class.
      self.io = io.listen(server);

      // First event and recursive, event called when a new user join our chat.
      // This event notifies our application that new client opened a new connection.
      // socket param is a event emitter that can trigger various other event based on the
      // server message.
      self.io.on('connection', self.connected);


    }


    Socket.prototype.connected = function (socket) {



    }





    module.exports = Socket;

})()
