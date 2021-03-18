import React, {useReducer} from 'react'
import JoinBlock from "./сomponents/JoinBlock"
import socket from "./socket";
import reducer from "./reducer";


function App() {
    // const connectSocket =()=>{  //-в случае если захочу подключаться к сокетам через кнопку
    //   io('http://localhost:8888')
    // }
    const [state, dispatch] = useReducer(reducer, {
        isAuth: false
    })
    const onLogin = () => {
        dispatch({
            type: 'is_authenticated',
            payload: true
        })
    }
    console.log(state)
    return (
        <div className="wrapper">
            <JoinBlock onLogin={onLogin}/>
        </div>
    );
}

export default App;
