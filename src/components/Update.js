import React, {useState} from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";

const Update = ({posts, setPosts, postId, setPostId}) => {
    const history = useHistory();
    const params = useParams();
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [location, setLocation] = useState([]);
    const [willDeliver, setWillDeliver] = useState(true);
    
    console.log(params);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const token = localStorage.getItem('token');
        console.log('title, description: ', title, description);
        console.log('postId: ', postId);
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/${params.postId}`,{
            method: 'PATCH',
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
        if(data && data.title) {
            const newPosts = posts.map(post => {
                if(post.id === postId){
                    return data;
                } else {
                    return post;
                }
            });
            setPosts(newPosts);
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setPostId(null);
        }
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
        Update Post
    </h3>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
        <input type="text" placeholder="description" value={description} onChange={(ev) => setDescription(ev.target.value)}></input>
        <input type="text" placeholder="price" value={price} onChange={(ev) => setPrice(ev.target.value)}></input>
        <input type="text" placeholder="location" value={location} onChange={(ev) => setLocation(ev.target.value)}></input>
        <Checkerbox willDeliver={willDeliver} setWillDeliver={setWillDeliver} />
        <button type="submit" className="btn" onClick={(ev) => {
            handleSubmit(ev)
            history.push('/MyPosts')}}>Update</button>
    </form>
</>
}

export default Update