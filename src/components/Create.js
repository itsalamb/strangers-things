import React, { useState } from "react";

const Create = ({posts, setPosts}) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [location, setLocation] = useState([]);
    const [willDeliver, setWillDeliver] = useState(true);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const token = localStorage.getItem('token');
        console.log('thisisyourtoken', token)
        const response = await fetch('https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts' ,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    location,
                    willDeliver,
                }
                
               
            })
        });
        const data = await response.json();
        console.log('data: ', data);
        setPosts([data, ...posts]);
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
    }

    const Checkerbox = () => {
        const [checked, setChecked] = useState(false);

        const handleChange = () => {
            setChecked(!checked);
        };
        return (
            <div>
                <Checkbox
                    label="Willing to Deliver"
                    value={checked}
                    onChange={handleChange}
                />
            </div>
        );
    };

    const Checkbox = ({label, value, onChange}) => {
        return (
            <label>
              <input type="checkbox" checked={value} onChange={onChange} />
              {label}
            </label>
          );
    };


    return <>
        <h3>
            Create a Post
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="description" value={description} onChange={(ev) => setDescription(ev.target.value)}></input>
            <input type="text" placeholder="price" value={price} onChange={(ev) => setPrice(ev.target.value)}></input>
            <input type="text" placeholder="location" value={location} onChange={(ev) => setLocation(ev.target.value)}></input>
            <Checkerbox willDeliver={willDeliver} setWillDeliver={setWillDeliver} />
            <button type="submit" className="btn">Submit</button>
        </form>
    </>
}

export default Create