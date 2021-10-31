import React from 'react';
import './App.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import Create from "./components/Create.js"
import Register from './components/Register';
import Login from './components/Login';
import Update from './components/Update';
import AllPosts from './components/AllPosts';
import MyPosts from './components/MyPosts';
import Messages from './components/Messages';

const App = () => {
// const [posts, setPosts] = useState([]);
// const [username, setUsername] = useState([]);
// const [postId, setPostId] = useState(null);


return (
  <Router>
    <div id='container'>
      <nav id='navbar'>
        <NavLink exact to="/Home">Home  </NavLink>
        <NavLink exact to="/MyPosts">MyPosts  </NavLink>
        <NavLink to="/Create">CreatePost  </NavLink>
        <NavLink to="/Login">Login  </NavLink>
        <NavLink to="/Register">Register  </NavLink>
        <button onClick={ () => localStorage.clear()}>Log Out</button>
      </nav>
      <div id='main-section'>
        <Switch>
          <Route path="/Home">
            <AllPosts />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/post/edit/:postId" >
            <Update />
          </Route>
          <Route path="/MyPosts">
            <MyPosts />
          </Route>
          <Route path="/MyPosts/:postId/messgaes">
            <Messages />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
)
}

export default App;
// https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT
// Messages, style