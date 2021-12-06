const express = require('express');
const cors = require('cors');
const { emitData } = require('./service/encrypt')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});

app.get('/', (req, res) => {
    res.send('Heello world');
})

emitData(io)

http.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running ${process.env.PORT || 3000}`);
});
