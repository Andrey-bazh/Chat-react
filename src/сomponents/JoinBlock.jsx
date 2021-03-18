import React, {useState} from 'react'
import socket from "../socket";
import axios from   'axios'




function JoinBlock({onLogin}) {
    const [roomId,setRoomID] = useState('');
    const [userName,setUserName] = useState('');

     const onEnter = ()=>{
         if(!roomId || !userName){
             return alert("Введите данные")
         }
         axios.post('/chats',{
             roomId,
             userName
         }).then(onLogin);
    }
return(
    <div className="join-block">
        <input type="text" placeholder="Room ID"
               value={roomId}
               onChange={e=>setRoomID(e.target.value)} />
        <input type="text" placeholder="Имя"
               value={userName}
               onChange={e=>setUserName(e.target.value)}  />
        <button onClick={onEnter} className="btn btn-success" >Connect</button>
    </div>
)
}
export default JoinBlock