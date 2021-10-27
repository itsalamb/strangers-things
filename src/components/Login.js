import React, { useState } from "react";

const Login = ({}) => {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const token = localStorage.getItem('token');
        const response = await fetch('https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/users/login' ,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
            user:{
                username,
                password,
            }
            })
        });
        const data = await response.json();
        console.log('logindata', data)
        setUsername('');
        setPassword('');
    }


    return <>
    <h3>
        Login
    </h3>
    <form onSubmit={handleSubmit}>
        <input type="username" placeholder="username" value={username} onChange={(ev) => setUsername(ev.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
        <button type="Login" className="login-btn">Login</button>
    </form>
</>
}

export default Login