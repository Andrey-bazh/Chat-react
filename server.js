const express= require('express');
// const useSocket = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ['websocket'],
        credentials: true
    }
});

app.use(express.json())

const rooms = new Map();

app.get('/chats', (req,res)=> {
    console.log('Hello')
    res.json(rooms)

});
app.post('/chats',(req,res)=>{

    const {roomId,userName}= req.body;
    // console.log(req.body)
    if(!rooms.has(roomId)) {
        rooms.set(roomId,new Map([
            ['users',new Map()],
            ['messages',[]]
        ]))
    }
    res.json([...rooms.keys()])
    }

)

io.on('connection', socket =>{
    console.log('user connected ',socket.id)

})

server.listen(8888,(err)=>{
    if(err){
        throw Error(err)
    }
    console.log('server start')
});