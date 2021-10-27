import React, { useState } from "react";

const handleDelete = async (postIdToDelete) => {
    console.log('postIdToDelete', postIdToDelete);
    const token = localStorage.getItem('token');
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/${postIdToDelete}` ,{
            method: 'DELETE',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        // if(data) {
        //     const newPosts = posts.filter(post => post.id !== postIdToDelete)
        //     setPosts(newPosts);
        // }
}

  export default handleDelete 