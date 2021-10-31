import React, { useEffect, useState } from 'react';
import handleDelete from './Delete';

import { useHistory } from "react-router";
import Messages from './Messages';

const MyPosts = ({  postId, setPostId }) => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const token = localStorage.getItem('token');
            const resp = await fetch('https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts', {
                method: 'GET',
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            const { data } = await resp.json();
            console.log(data.posts);
            setPosts(data.posts);
        }
        fetchPosts();
    }, [])

    


    const filteredPosts = posts.filter(post => 
        post.isAuthor === true

    )

    return (
        <>
            <h1 className="Posts">My Posts</h1>
            {filteredPosts.length ? filteredPosts.map(post => <div key={post._id}>
                <h3 button="button" className="btn-go-to" onClick = {() => {
                    history.push('/myposts/:postId/messages')
                }}>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.location}</p>
                <p>{post.willDeliver ? "Willing to Deliver" : "Not Willing to Deliver"}</p>
                <button type="button" className="btn-Edit" onClick={() => {history.push(`post/edit/${post._id}`)}}>Edit</button>
                <button type="button" className="btn-Delete" onClick={() => {
                    handleDelete(post._id)
                    history.push('/MyPosts')}}>Delete</button>
                <Messages />
            </div>) : null}
            
        </>
    );
}

export default MyPosts

// tried getting the click of the Title to bring it to a page that showed the post and the messages but could not get it to work correctly with the PostId