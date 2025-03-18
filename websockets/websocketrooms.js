io.on('connection', (socket) => {
    // Join a specific room
    socket.on('join_room', (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
        socket.to(room).emit('server_message', `A new user has joined room ${room}`);
    });

    // Leave a specific room
    socket.on('leave_room', (room) => {
        socket.leave(room);
        console.log(`User ${socket.id} left room ${room}`);
        socket.to(room).emit('server_message', `User has left room ${room}`);
    });

    // Send message to a specific room
    socket.on('room_message', (data) => {
        const { room, message } = data;
        socket.to(room).emit('server_message', message);
    });
});