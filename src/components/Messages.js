import React, {useEffect, useState } from "react";
import { useParams } from "react-router";
import Update from "./Update";


const Messages = ({posts, setPosts, postId, setPostId}) => {
    const [messages, setMessages] = useState([]);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        const fetchMessages = async () => {
            const token = localStorage.getItem('token');
            console.log('postId', postId)
            const resp = await fetch(`https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/${postId}/messages`,{
                method: "POST",
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': `Bearer ${token}`,
                }
                ,body: JSON.stringify({
                    message: {
                        content:'',
                    }
                })
            })
            const data = await resp.json();
            console.log('these are the messages', data)
            // setMessages(data.data.messages);
        } 
        fetchMessages()
    }); 

    return <>
    <h4>
        Messages
    </h4>
    { messages.map(message => <div key={message.data._id}>
        <p>{message.content}</p>
    </div>)} 
        </>
}

export default Messages

// tried inserting the PostId to URL for fetch to show the messages but I could not get the postId in the url correctly. I tried it with and without useParams like Pawan and I talked about.
// I just could not get this to work. Feel like I kinda failed in that aspect