import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useLocation, Routes, Route, useParams} from 'react-router-dom';
import './App.css'
import Home from './Home';
import Posts from './Posts';
import Users from './Users';





function App() {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const location = useLocation();
  const {pathname} = location; 

  useEffect(() => {
    const fetchUser= async ()=>{
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const data = response.data;
      console.log(data);
      setUser(data); 
    }
    fetchUser();
  },[]);

  useEffect(() => {
    const fetchPost= async ()=>{
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts');
      const data = response.data;
      console.log(data);
      setPost(data); 
    }
    fetchPost();
  },[]);

  return (
   
   <>
    <nav>
    <Link to ='/' className={ pathname === '/' ? 'selected' : ''}>Home </Link> 
    <Link to ='/users' className={ pathname === '/users' ? 'selected' : ''}>Users</Link>
    <Link to ='/posts' className={ pathname === '/posts' ? 'selected' : ''}>Posts</Link>  
    </nav>

    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/users' element = {<Users user = {user} />}/>
      <Route path ='/posts' element = {<Posts post = {post}/>}/> 
    </Routes>



    </>
  )
}

export default App
