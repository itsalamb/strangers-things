import React, {useEffect, useState } from "react";


const Messages = ({postId, setPostId}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const token = localStorage.getItem('token');
            const resp = await fetch(`https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/${postId}/messages`,{
                method: "POST",
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    message: {
                        content:'',
                    }
                })
            })
            const {data} = await resp.json();
            console.log('these are the messages', data)
        }
    })

    return <>
    <h4>
        Messages
    </h4>
    {messages.length ? messages.map(message => <div>
                Waiting for a message to inspect it
    </div>):null} 
        </>
}

export default Messages