import React, { useEffect, useState } from 'react';


const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  const fetchPosts = async () => {
    const token = localStorage.getItem('token');
    const resp = await fetch('https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts',{
        method: 'GET',
        headers: {
            'Content-type': 'Application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    const {data} = await resp.json();
    console.log(data.posts);
    setPosts(data.posts);
  }
  fetchPosts();
}, [])

// function postMatches(post, text) {

// }

// const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
// const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return (
        <>
           <h1 className="Posts">Posts</h1>
            {posts.length ? posts.map(post => <div key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.price}</p>
                <p>{post.location}</p>
                <p>{post.willDeliver ? "Willing to Deliver" : "Not Willing to Deliver"}</p>
    </div>):null} 
        </>
    );

    // return (
    //     <>
    //        <h1 className="Posts">Posts</h1>
    //         {postsToDisplay.length ? postsToDisplay.map(post => <div key={post._id}>
    //             <h3>{post.title}</h3>
    //             <p>{post.description}</p>
    //             <p>{post.price}</p>
    //             <p>{post.location}</p>
    //             <p>{post.willDeliver ? "Willing to Deliver" : "Not Willing to Deliver"}</p>
    // </div>):null} 
    //     </>
    // );
}

export default AllPosts

//didnt get to the searching function and didnt realize it needed one until late Sunday afternoon