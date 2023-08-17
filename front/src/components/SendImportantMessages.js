import React,{useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import axios from "axios"

export default function SendImportantMessages() {
    // Create WebSocket connection.
    const [message, setmessage] = useState("")
    const socket = new WebSocket('ws://localhost:4000');

    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log('Connected to WS Server')
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });

    const sendMessage = () => {
        socket.send(message);
    }

    return(
        <div className="col-md-8 mt-4 mx-auto">
            <h2 className='header-name'>Send Important Messages</h2>
            <div>

            </div>
            <div>
                <textarea style={{height:"200px"}} value={message} onChange={(e)=>setmessage(e.currentTarget.value)} className="form-control"></textarea>
                <button  className="btn btn-success mt-1" onClick={()=>sendMessage()}>Send Message</button>
            </div>
        </div>
        
       
      
    )
}