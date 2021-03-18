import React, {useState} from 'react'
import axios from   'axios'




function JoinBlock({onLogin}) {
    const [roomId,setRoomID] = useState('');
    const [userName,setUserName] = useState('');
    const [isLoading,setLoading] = useState(false);

     const onEnter =async ()=>{
         if(!roomId || !userName){
             return alert("Введите данные")
         }
            const obj={
             roomId,
             userName
            }
         setLoading(true);
         await axios.post('/chats',obj)
         onLogin(obj)

    }
return(
    <div className="join-block">
        <input type="text" placeholder="Room ID"
               value={roomId}
               onChange={e=>setRoomID(e.target.value)} />
        <input type="text" placeholder="Имя"
               value={userName}
               onChange={e=>setUserName(e.target.value)}  />
        <button disabled={isLoading} onClick={onEnter} className="btn btn-success" >
            {isLoading ? "Вход..": "ВОЙТИ"}

        </button>
    </div>
)
}
export default JoinBlock