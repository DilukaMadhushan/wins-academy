import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"

export default function ViewImportantMessages() {
    // Create WebSocket connection.
    const [message, setmessage] = useState("")
    const [messagelist, setmessagelist] = useState([])
    const socket = new WebSocket('ws://localhost:4000');


    console.log(messagelist)
    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log('Connected to WS Server')
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
        var reader = new FileReader();
        reader.onload = function () {
            console.log(reader.result)
            let jj = JSON.parse(JSON.stringify(messagelist))
            jj.push(reader.result)
            setmessagelist(jj)
        }
        try {
            reader.readAsText(event.data)
        } catch (error) {

        }

    });

    const sendMessage = () => {
        socket.send(message);
    }

    return (
        <div className="col-md-8 mt-4 mx-auto">
            <h2 className='header-name'> Important Messages for students</h2>
            <div>
                {messagelist.map(item => {
                    return <p style={{
                        position: "relative",
                        maxWidth: "30em",

                        backgroundColor: "#fff",
                        padding: " 1.125em 1.5em",
                        fontSize: "1.25em",
                        borderRadius: "1rem",
                        boxShadow: "0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2)",
                    }} className="important-message-bubble">{item}</p>
                })}
            </div>

        </div >



    )
}