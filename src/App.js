import React, { useEffect, useState } from 'react';
import './App.css';
import Create from "./components/Create.js"
import Register from './components/Register';
import Login from './components/Login';
import Update from './components/Update';
import handleDelete from './components/Delete';


const App = () => {
const [posts, setPosts] = useState([]);
const [username, setUsername] = useState([]);
const [postId, setPostId] = useState(null);

  useEffect(() => {
  const fetchPosts = async () => {
    const resp = await fetch('https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts');
    const {data} = await resp.json();
    console.log(data.posts);
    setPosts(data.posts);
  }
  fetchPosts();
}, [])

  return (
    <>
    <Register username={username} setUsername={setUsername}/>
    <Login username={username} setUsername={setUsername} />
    <Create posts={posts} setPosts={setPosts}/>
    <Update posts={posts} setPosts={setPosts} postId={postId} setPostId={setPostId} />
    <handleDelete />
    <h1 className="Posts">Posts</h1>
    {posts.length ? posts.map(post => <div key={post._id}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <p>{post.price}</p>
      <p>{post.location}</p>
      <p>{post.willDeliver ? "Willing to Deliver" : "Not Willing to Deliver"}</p>
      <button type="button" className="btn-Edit" onClick={() => setPostId(post._id)}>Edit</button>
      <button type="button" className="btn-Delete" onClick={() => handleDelete(post._id)}>Delete</button>
    </div>):null}
    
    </>
  );
}

export default App;
// https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT