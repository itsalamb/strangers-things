import React, { useState } from "react";
import { useHistory } from "react-router";

const Register = ({}) => {
    const history = useHistory();
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const response = await fetch('https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/users/register' ,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
            user:{
                username,
                password,
            }
            })
        });
        const data = await response.json();
        localStorage.setItem('token', data.data.token);
        const token = localStorage.getItem('token');
        console.log({token})
        console.log('registerdata', data)
        setUsername('');
        setPassword('');
        history.push('/login')
    }

    return <>
    <h3>
        Register
    </h3>
    <form onSubmit={handleSubmit}>
        <input type="username" placeholder="username" value={username} onChange={(ev) => setUsername(ev.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
        <button type="register" className="register-btn">Register</button>
    </form>
</>
}

export default Register

